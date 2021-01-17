import { merge } from 'ramda';

export interface AppConfig {
  static: {
    path: string;
  };
}

export type Environment =
  | 'common'
  | 'developmentLocal'
  | 'development'
  | 'productionLocal'
  | 'production';

type Config = {
  [key in Environment]: Partial<AppConfig>;
};

const env = process.env.NODE_RUNTIME_ENV || 'development';
const offline = process.env.IS_OFFLINE || false;

const defaultConfig: Config = {
  common: {
    static: {
      path: 'http://localhost:9000/'
    }
  },
  development: {
    static: {
      path: 'https://fandanzle-assets-development.s3.eu-west-2.amazonaws.com'
    }
  },
  developmentLocal: {},
  productionLocal: {},
  production: {
    static: {
      path: 'https://fandanzle-assets-production.s3.eu-west-2.amazonaws.com'
    }
  }
};

const envKey = offline ? `${env}Local` : env;

export const config: Partial<AppConfig> = merge<
  Partial<AppConfig>,
  Partial<AppConfig>
>(defaultConfig.common, defaultConfig[envKey]);
