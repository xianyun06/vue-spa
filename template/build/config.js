// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

var prodEnv = {
  NODE_ENV: '"production"'
};
var devEnv = {
  NODE_ENV: '"development"'
};

var testEnv = {
  NODE_ENV: '"testing"'
};

module.exports = {
  build: {
    env: prodEnv,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static asset for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: devEnv,
    port: 8000,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },
  test:{
    env:testEnv
  }
}
