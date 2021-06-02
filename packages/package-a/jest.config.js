// packages/package-a/jest.config.js
// Jest configuration for api
const base = require('../../jest.config.base.js')

// support tsconfig paths
// const tsconfig = require('./tsconfig.json')
// const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig)

module.exports = {
  ...base,
  name: '@monorepo/package-a',
  displayName: 'Package A'
  // moduleNameMapper
}
