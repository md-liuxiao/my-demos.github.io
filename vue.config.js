// vue.config.js

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
  // 选项...
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}