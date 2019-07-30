'use strict';

// テスターを読み込む
var RuleTester = require('eslint').RuleTester;

// テスターを作って実行する
// tester.run(ルール名, ルール定義, テストパターン);
var tester = new RuleTester();
tester.run('no-literal-call', require('../rule/no-literal-call'), {
  valid: [],
  invalid: [],
});
