export interface AppConfig {
  static: {
    path: string;
  }
  api: {
    path: string
  }
}

export type Environment =
  | 'common'
  | 'local'
  | 'developmentLocal'
  | 'development'
  | 'productionLocal'
  | 'production';

type Config = {
  [key in Environment]: Partial<AppConfig>;
};

console.log(process.env)

const env = process.env.NODE_RUNTIME_ENV || 'development';
const bucket = process.env.CDN_BUCKET || 'development';
const offline = process.env.IS_OFFLINE || false;

const defaultConfig: Config = {
  common: {
    static: {
      path: 'http://localhost:9000/'
    },
    api: {
      path: 'https://api.devnotnull.com'
    }
  },
  local: {
    static: {
      path: 'http://localhost:9000/'
    }
  },
  development: {
    static: {
      path: `https://devnotnull-ui-${bucket}.s3.amazonaws.com`
    },
  },
  developmentLocal: {},
  productionLocal: {},
  production: {
    static: {
      path: `https://devnotnull-ui-production.s3.amazonaws.com`
    }
  }
};

const envKey = offline ? `${env}Local` : env;

export const config: Partial<AppConfig> = {
  ...defaultConfig.common,
  ...defaultConfig[envKey]
};
