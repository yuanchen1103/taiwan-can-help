const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
});
