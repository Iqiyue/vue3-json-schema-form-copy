// eslint-disable-next-line @typescript-eslint/no-var-requires
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

// const isLib = process.env.TYPE === "lib";

module.exports = {
  publicPath: process.env.TYPE === "github.io" ? "./" : "/",
  // configureWebpack(config) {
  //   console.log(config.plugins)
  // },
  chainWebpack(config) {
    config.plugin("monaco").use(new MonacoWebpackPlugin());
  },
};
