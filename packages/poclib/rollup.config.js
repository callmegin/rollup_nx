const replace = require('@rollup/plugin-replace');
const rpt2 = require('rollup-plugin-typescript2');
const externalPeerDeps = require('rollup-plugin-peer-deps-external');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = (config) => {
  const myConfig = {
    ...config,
    plugins: [
      rpt2(),
      externalPeerDeps(),
      nodeResolve(),
      babel({
        babelHelpers: 'bundled',
        // presets: [['@babel/preset-react']],
      }),
      commonjs(),
    ],
  };
  // console.log('==================================');
  console.log('my config', myConfig);
  return myConfig;
};
