const useESModules = process.env.BABEL_ENV === 'es';

module.exports = {
  presets: [
    ['@babel/env', { modules: useESModules ? false : 'commonjs' }],
    '@babel/react',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    ['@babel/transform-runtime', { useESModules }],
  ],
};
