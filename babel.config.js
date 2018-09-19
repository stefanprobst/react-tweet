const modules = process.env.BABEL_ENV || false;

module.exports = {
  presets: [['@babel/env', { modules }], '@babel/react'],
  plugins: ['@babel/proposal-class-properties']
};
