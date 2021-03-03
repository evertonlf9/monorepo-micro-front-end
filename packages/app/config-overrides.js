/* eslint-disable */
const path = require('path');
const fs = require('fs');
const {
  addWebpackExternals,
  override,
  babelInclude,
} = require('customize-cra');

module.exports = (config, env) => {
  return Object.assign(
    config,
    override(
      addWebpackExternals({
        react: 'React',
        'react-dom': 'ReactDOM'
      }),
      /* Makes sure Babel compiles the stuff in the common folder */
      babelInclude([path.resolve('src'), fs.realpathSync('../shared')]),
    )(config, env),
  );
};
