const isProd = process.env.NODE_ENV === 'prod';

export default [{
  target: 'node',
  cjs: { type: 'babel', lazy: true },
  disableTypeCheck: true,
},
{
  entry: 'src/index.ts',
  umd: {
    name: 'tasks',
    minFile: isProd,
    sourcemap: !isProd,
  },
  extraExternals: ['xterm'],
  typescriptOpts: {
    check: false,
    globals: {
    },
  },
}];
