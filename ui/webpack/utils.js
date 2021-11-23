const NODE_ENV = process.env.NODE_ENV || "development";
const isDevelopment = NODE_ENV === "development";
const isProduction = NODE_ENV === "production";
const target = process.env.TARGET || "client";
const isClient = target === "client";
const publicPath = "/";
