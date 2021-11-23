pipeline {
  agent {
    docker {
      image 'node:12'
    }

  }
  stages {
    stage('error') {
      steps {
        sh 'yarn build'
      }
    }

  }
}