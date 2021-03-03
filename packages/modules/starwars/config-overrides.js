/* eslint-disable */
const path = require('path');
const fs = require('fs');
const {
  addWebpackExternals,
  override,
  babelInclude,
} = require('customize-cra');

module.exports = (config, env) => {
  // config.externals = {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  //   'styled-components': 'styled',
  // };

  // config.optimization.runtimeChunk = false;
  // config.optimization.splitChunks = {
  //   cacheGroups: {
  //     default: false,
  //     vendor: {
  //       name: 'vendor',
  //     },
  //   },
  // };

  return Object.assign(
    config,
    override(
      addWebpackExternals({
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      }),
      /* Makes sure Babel compiles the stuff in the common folder */
      babelInclude([path.resolve('src'), fs.realpathSync('../../shared')]),
    )(config, env),
  );
};
