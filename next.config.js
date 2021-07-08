const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional
  images: {
    domains: ['1306346100.vod2.myqcloud.com'],
  },
  modifyVars: { '@primary-color': '#005cc5' },
  // optional
  lessVarsFilePath: './src/styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  }
});