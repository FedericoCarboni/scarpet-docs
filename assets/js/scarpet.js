// SPDX-License-Identifier: Unlicense
/**
 * @fileoverview Prism.js grammar for highlighting Scarpet code.
 * @author Federico Carboni
 */
"use strict";
Prism.languages.scarpet = {
  comment: {
    pattern: /\/\/.*\n/,
    greedy: true,
  },
  string: {
    pattern: /'(?:\\'|.)*'/,
    greedy: true,
  },
  number: /\b(0x[0-9A-Fa-f]+|[0-9]+\.[0-9]([eE][-+]?[0-9]+)?|[0-9]+)/,
  keyword:
    /\b(if|loop|c_for|for|while|continue|break|return|exit|throw|try|sum|difference|product|quotient|equal|unique|increasing|decreasing|nonincreasing|nondecreasing|and|or|bitwise_or|bitwise_and|bitwise_xor|bitwise_shift_left|bitwise_shift_right|bitwise_arithmetic_shift_right|bitwise_roll_left|bitwise_roll_right|bitwise_not|bitwise_popcount|double_to_long_bits|long_to_double_bits|m|l|call|then|outer|var|vars|undef|import|_)(?=\s*\()/,
  builtin: /\b(player|scan|block|print)(?=\s*\()/,
  function: /\b\w+(?=\s*\()/,
  constant: /\b(null|true|false|pi|euler)/,
  operator: {
    pattern:
      /(^|[^.])(?:->|&&|<>|\|\||::|[?:~]|[+*/%^!=<>]|\+=?)/m,
    lookbehind: true,
  },
  variable: /\b(global_\w+|_i|_x|_y|_z|_trace|_)/,
  punctuation: /[{}[\];(),.:]/,
};
