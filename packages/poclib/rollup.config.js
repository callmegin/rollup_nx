// import typescript from 'rollup-plugin-typescript2';

// export default {
//   input: 'aps/wtf2/main.ts',
//   output: {
//     dir: 'DAbunDLE',
//     format: 'umd',
//   },
//   plugins: [typescript()],
// };
const replace = require('@rollup/plugin-replace');
module.exports = (config) => {
  // const typescript = require('rollup-plugin-typescript2');
  // const commonjs = require('@rollup/plugin-commonjs');
  // const resolve = require('@rollup/plugin-node-resolve');

  // const { DEFAULT_EXTENSIONS } = require('@babel/core');
  // const babel = require('@rollup/plugin-babel');
  // const peerDepsExternal = require('rollup-plugin-peer-deps-external');
  // const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');

  // const nxConfig = nrwlConfig(config);

  console.log('incoming', config);
  // let tstConfig = { ...config };

  // tstConfig = {
  //   plugins: [
  //     babel.babel({
  //       babelHelpers: 'runtime',
  //       presets: [['@babel/preset-typescript']],
  //       skipPreflightCheck: true,
  //       extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
  //     }),
  //   ],
  // };
  // console.log('tstConfig', tstConfig);
  const myConfig = {
    ...config,
    // input:
    //   'C:\\Users\\gintautas.anduzis\\WORK\\TEST\\trying-nx/libs/lib-app/src/index.ts',
    // output: {
    //   ...config.output,
    //   plugins: [
    //     replace({
    //       preventAssignment: true,
    //       "process.env.NODE_ENV": JSON.stringify("production"),
    //     }),
    //   ],
    // },
    // plugins: [
    //   // peerDepsExternal({
    //   //   packageJsonPath: '../../package.json',
    //   // }),
    //   // typescript(),
    //   // babel.babel({
    //   //   babelHelpers: 'bundled',
    //   //   presets: [['@babel/preset-typescript']],
    //   //   skipPreflightCheck: true,
    //   //   extensions: [...DEFAULT_EXTENSIONS, '**/*.ts', '**/*.tsx'],
    //   // }),
    //   // commonjs(),
    //   // resolve.nodeResolve(),

    //   ...nxConfig.plugins,
    // ],
  };
  // console.log('==================================');
  // console.log('my config', myConfig);
  return myConfig;
};
