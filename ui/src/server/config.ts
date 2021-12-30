export interface AppConfig {
  static: {
    path: string;
  };
}

export type Environment =
  | 'common'
  | 'local'
  | 'developmentLocal'
  | 'development'
  | 'stagingLocal'
  | 'staging'
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
      path: 'http://s3.eu-west-2.amazonaws.com/devnotnull.co.uk-development'
    }
  },
  local: {
    static: {
      path: 'http://localhost:9000/'
    }
  },
  developmentLocal: {},
  stagingLocal: {},
  staging: {
    static: {
      path: 'http://s3.eu-west-2.amazonaws.com/devnotnull.co.uk-development'
    }
  },
  productionLocal: {},
  production: {
    static: {
      path: 'http://s3.eu-west-2.amazonaws.com/devnotnull.co.uk-production'
    }
  }
};

const envKey = offline ? `${env}Local` : env;

export const config: Partial<AppConfig> = {
  ...defaultConfig.common,
  ...defaultConfig[envKey]
};
