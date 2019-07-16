const path = require('path')
const glob = require('glob');
const _ = require('lodash');

const baseDir = __dirname.indexOf('build') !== -1 ? 'build' : 'src';
const pattern = `${baseDir}/resolvers/**/resolver.js`;

let resolvers = [];

glob.sync(pattern).forEach((file) => {
  let root = path.join(__dirname, '..', '..', file);
  resolvers.push(require(root));
});

module.exports = _.merge.apply(this, resolvers);
