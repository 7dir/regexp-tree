/**
 * The MIT License (MIT)
 * Copyright (c) 2017-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

const regexpTreeParser = require('./generated/regexp-tree');

// By default do not capture locations; callers may override.
regexpTreeParser.setOptions({captureLocations: false});

/**
 * An API object for RegExp processing (parsing/transform/generation).
 */
const regexpTree = {
  /**
   * Parses a regexp string, producing an AST.
   *
   * @param string regexp
   * @return Object AST
   */
  parse(regexp) {
    return regexpTreeParser.parse(regexp);
  },

  /**
   * Sets parser options.
   * @param Object options
   */
  setParserOptions(options) {
    regexpTreeParser.setOptions(options);
  },

  /**
   * Traverses a RegExp AST.
   *
   * @param Object ast
   * @param Object handler
   *
   * A `handler` is an object containing handler function for needed
   * node types. Example:
   *
   *   regexpTree.traverse(ast, {
   *     onChar(node, parent) {
   *       ...
   *     },
   *   });
   */
  traverse(ast, handler) {
    // TODO(#6) https://github.com/DmitrySoshnikov/regexp-tree/issues/6
  },

  /**
   * Generates a RegExp string from an AST.
   *
   * @param Object ast
   *
   * Invariant:
   *
   *   regexpTree.generate(regexpTree.parse('/[a-z]+/i')); // '/[a-z]+/i'
   */
  generate(ast) {
    // TODO(#5) https://github.com/DmitrySoshnikov/regexp-tree/issues/5
  },
};

module.exports = regexpTree;