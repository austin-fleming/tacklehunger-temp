/* eslint-disable no-eval */
/* eslint-disable import/no-nodejs-modules */
/* eslint-disable global-require */
const requireTypescript = (path) => {
  const fileContent = require('fs').readFileSync(path, 'utf8');
  const compiled = require('@babel/core').transform(fileContent, {
    filename: path,
    presets: ['@babel/preset-typescript'],
  });
  return eval(compiled.code);
};

const { sanityClient } = requireTypescript('./sanity');
const { exportPathMap } = requireTypescript('./exportPathMap');

module.exports = { exportPathMap, reactStrictMode: true };
