/**
 * jest.config.js - jest 配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.9.4
 */
module.exports = {
  moduleFileExtensions: ['js'],
  testMatch: ['**/tests/**/*.spec.(js)'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  // transformIgnorePatterns: ['node_modules/@yaohaixiao/(?!types.js)'],
  collectCoverage: true,
  coverageDirectory: 'report/coverage',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'dom.js 单测报告',
        outputPath: 'report/unit-test/index.html',
        includeFailureMsg: true
      }
    ]
  ]
}
