'use strict';

module.exports = function(context) {
  return {
    ArrayExpression: function(node) {
      console.log('配列リテラルを発見!');
    },
  };
};

module.exports.schema = [];
