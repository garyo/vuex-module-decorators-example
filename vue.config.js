const CircularDependencyPlugin = require("circular-dependency-plugin")
module.exports = {
  configureWebpack: {
    plugins: [
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: false,
        allowAsyncCycles: true,
        cwd: process.cwd()
      })
    ],
  }
}
