'use strict';

var LITERAL_TYPE = /^(?:Literal|ArrayExpression|ObjectExpression|TemplateLiteral)$/;

module.exports = function(context) {
  return {
    /**
     * この CallExpression の呼び出し対象が Literal, ArrayExpression, ObjectExpression,
     * TemplateLiteral, ClassExpression のいずれかだった場合、警告する。
     *
     * @param {ASTNode} node - チェックする CallExpression ノード。
     */
    CallExpression: function(node) {
      var callee = node.callee;
      var message = null;

      // 呼び出し対象のtypeがリテラルかどうかチェックする。
      if (LITERAL_TYPE.test(callee.type)) {
        message = 'This is not a function.';
      }
      if (callee.type === 'ClassExpression') {
        message = "Class constructors cannot be invoked without 'new'.";
      }

      // リテラルだったら警告する
      if (message) {
        context.report({ node: node, message: message });
      }
    },
  };
};

module.exports.schema = [];
