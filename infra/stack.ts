import * as cdk from 'aws-cdk-lib';
import { Stack, StackProps } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as cloudfrontOrigins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

export class S3WithCloudFrontAndCloudWatchStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // 1. Create an S3 Bucket
    const bucket = new s3.Bucket(this, 'MyBucket', {
      versioned: true,
      publicReadAccess: false,  // Make sure the bucket is not publicly accessible directly
      removalPolicy: cdk.RemovalPolicy.DESTROY  // For dev purposes, destroy bucket on stack deletion
    });

    // 2. Create a CloudFront Distribution to serve content from the S3 bucket
    const cloudFrontDistribution = new cloudfront.Distribution(this, 'MyCloudFrontDistribution', {
      defaultBehavior: {
        origin: new cloudfrontOrigins.S3Origin(bucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: 'index.html',  // if you're hosting a static website
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
          ttl: cdk.Duration.minutes(30),
        },
      ],
    });

    // 3. (Optional) Deploy static content to the S3 bucket
    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset('./website-content')],  // Local path to your static website files
      destinationBucket: bucket,
      distribution: cloudFrontDistribution,
      distributionPaths: ['/*'],  // Invalidate CloudFront cache after deployment
    });

    // 4. Setup CloudWatch for S3 and CloudFront monitoring
    // CloudWatch metrics for S3 bucket
    new cloudwatch.Metric({
      namespace: 'AWS/S3',
      metricName: 'BucketSizeBytes',
      dimensionsMap: {
        BucketName: bucket.bucketName,
        StorageType: 'StandardStorage',
      },
      statistic: 'Average',
      period: cdk.Duration.hours(1),
    }).createAlarm(this, 'S3BucketSizeAlarm', {
      threshold: 1000000000,  // Alarm if the bucket size exceeds 1 GB
      evaluationPeriods: 1,
    });

    // CloudFront CloudWatch Metric (e.g., for requests)
    const cloudFrontRequestsMetric = new cloudwatch.Metric({
      namespace: 'AWS/CloudFront',
      metricName: 'Requests',
      dimensionsMap: {
        DistributionId: cloudFrontDistribution.distributionId,
        Region: 'Global',
      },
      statistic: 'Sum',
      period: cdk.Duration.minutes(5),
    });

    new cloudwatch.Alarm(this, 'CloudFrontRequestsAlarm', {
      metric: cloudFrontRequestsMetric,
      threshold: 1000,  // Set a threshold for CloudFront requests
      evaluationPeriods: 1,
      alarmDescription: 'Alarm if CloudFront requests exceed 1000 in 5 minutes',
    });

    // 5. Enable CloudFront Access Logs to S3
    const cloudFrontLogBucket = new s3.Bucket(this, 'CloudFrontLogBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    cloudFrontDistribution.logBucket = cloudFrontLogBucket;
  }
}
