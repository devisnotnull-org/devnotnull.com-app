import { merge } from "ramda";

export interface AppConfig {
    static: {
      path: string;
    };
}

export type Environment =
  | "common"
  | "developmentLocal"
  | "development"
  | "stagingLocal"
  | "staging"
  | "productionLocal"
  | "production";

type Config = {
  [key in Environment]: Partial<AppConfig>;
};

const env = process.env.NODE_RUNTIME_ENV || "development";
const offline = process.env.IS_OFFLINE || false;

const defaultConfig: Config = {
  common: {
    static: {
      path:
        "http://localhost:9000/",
    },
  },
  development: {
    static: {
      path:
        "https://ecom-rc-backoffice-ui-development-assets.s3.eu-west-1.amazonaws.com/",
    },
  },
  developmentLocal: {},
  stagingLocal: {},
  staging: {
    static: {
      path:
        "https://ecom-rc-backoffice-ui-development-assets.s3.eu-west-1.amazonaws.com/",
    },
  },  productionLocal: {},
  production: {
    static: {
      path:
        "https://ecom-rc-backoffice-ui-development-assets.s3.eu-west-1.amazonaws.com/",
    },
  },};

const envKey = offline ? `${env}Local` : env;

export const config: Partial<AppConfig> = merge<
  Partial<AppConfig>,
  Partial<AppConfig>
>(defaultConfig.common, defaultConfig[envKey]);
