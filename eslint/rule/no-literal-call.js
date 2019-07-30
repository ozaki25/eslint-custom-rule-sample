'use strict';

const LITERAL_TYPE = /^(?:Literal|ArrayExpression|ObjectExpression|TemplateLiteral)$/;

module.exports = function(context) {
  return {
    CallExpression(node) {
      const callee = node.callee;
      let message = null;

      // 呼び出し対象のtypeがリテラルかどうかチェックする。
      if (LITERAL_TYPE.test(callee.type)) {
        message = 'This is not a function.';
      }
      if (callee.type === 'ClassExpression') {
        message = 'Class constructors cannot be invoked without \'new\'.';
      }

      // リテラルだったら警告する
      if (message) {
        context.report({ node, message });
      }
    }
  };
};

module.exports.schema = [];
