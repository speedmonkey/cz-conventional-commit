'format cjs';

var engine = require('./engine');
// var conventionalCommitTypes = require('conventional-commit-types');
var configLoader = require('commitizen').configLoader;

var config = configLoader.load();
var conventionalCommitTypes = {
  types: {
    feat: {
      emoji: '💡',
      description: 'A new feature',
      title: 'Features'
    },
    fix: {
      emoji: '🐛',
      description: 'A bug fix',
      title: 'Bug Fixes'
    },
    style: {
      emoji: '📦',
      description: 'Changes that do not affect the meaning of the code',
      title: 'Styles'
    },
    refactor: {
      emoji: '💻',
      description: 'A code change that neither fixes a bug nor adds a feature',
      title: 'Code Refactoring'
    }
  }
};
var options = {
  types: conventionalCommitTypes.types,
  defaultType: process.env.CZ_TYPE || config.defaultType,
  defaultScope: process.env.CZ_SCOPE || config.defaultScope,
  defaultSubject: process.env.CZ_SUBJECT || config.defaultSubject,
  defaultBody: process.env.CZ_BODY || config.defaultBody,
  defaultIssues: process.env.CZ_ISSUES || config.defaultIssues,
  maxHeaderWidth:
    (process.env.CZ_MAX_HEADER_WIDTH &&
      parseInt(process.env.CZ_MAX_HEADER_WIDTH)) ||
    config.maxHeaderWidth ||
    100,
  maxLineWidth:
    (process.env.CZ_MAX_LINE_WIDTH &&
      parseInt(process.env.CZ_MAX_LINE_WIDTH)) ||
    config.maxLineWidth ||
    100
};

(function(options) {
  try {
    var commitlintLoad = require('@commitlint/load');
    commitlintLoad().then(function(clConfig) {
      if (clConfig.rules) {
        var maxHeaderLengthRule = clConfig.rules['header-max-length'];
        if (
          typeof maxHeaderLengthRule === 'object' &&
          maxHeaderLengthRule.length >= 3 &&
          !process.env.CZ_MAX_HEADER_WIDTH &&
          !config.maxHeaderWidth
        ) {
          options.maxHeaderWidth = maxHeaderLengthRule[2];
        }
      }
    });
  } catch (err) {}
})(options);

module.exports = engine(options);
