var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  injectReplacements: () => injectReplacements
});
var import_isPlainObject = __toModule(require("lodash/isPlainObject"));
var import_sql_string = __toModule(require("../sql-string"));
function injectReplacements(sqlString, dialect, replacements) {
  var _a, _b, _c, _d;
  if (replacements == null) {
    return sqlString;
  }
  if (!Array.isArray(replacements) && !(0, import_isPlainObject.default)(replacements)) {
    throw new TypeError(`"replacements" must be an array or a plain object, but received ${JSON.stringify(replacements)} instead.`);
  }
  const isNamedReplacements = (0, import_isPlainObject.default)(replacements);
  const isPositionalReplacements = Array.isArray(replacements);
  let lastConsumedPositionalReplacementIndex = -1;
  let output = "";
  let currentDollarStringTagName = null;
  let isString = false;
  let isColumn = false;
  let previousSliceEnd = 0;
  let isSingleLineComment = false;
  let isCommentBlock = false;
  for (let i = 0; i < sqlString.length; i++) {
    const char = sqlString[i];
    if (isColumn) {
      if (char === dialect.TICK_CHAR_RIGHT) {
        isColumn = false;
      }
      continue;
    }
    if (isString) {
      if (char === "'" && !isBackslashEscaped(sqlString, i - 1)) {
        isString = false;
      }
      continue;
    }
    if (currentDollarStringTagName !== null) {
      if (char !== "$") {
        continue;
      }
      const remainingString = sqlString.slice(i, sqlString.length);
      const dollarStringStartMatch = remainingString.match(/^\$(?<name>[a-z_][0-9a-z_])?(\$)/i);
      const tagName = (_a = dollarStringStartMatch == null ? void 0 : dollarStringStartMatch.groups) == null ? void 0 : _a.name;
      if (currentDollarStringTagName === tagName) {
        currentDollarStringTagName = null;
      }
      continue;
    }
    if (isSingleLineComment) {
      if (char === "\n") {
        isSingleLineComment = false;
      }
      continue;
    }
    if (isCommentBlock) {
      if (char === "*" && sqlString[i + 1] === "/") {
        isCommentBlock = false;
      }
      continue;
    }
    if (char === dialect.TICK_CHAR_LEFT) {
      isColumn = true;
      continue;
    }
    if (char === "'") {
      isString = true;
      continue;
    }
    if (char === "-" && sqlString.slice(i, i + 3) === "-- ") {
      isSingleLineComment = true;
      continue;
    }
    if (char === "/" && sqlString.slice(i, i + 2) === "/*") {
      isCommentBlock = true;
      continue;
    }
    if (char === "$") {
      const previousChar = sqlString[i - 1];
      if (/[0-9a-z_]/i.test(previousChar)) {
        continue;
      }
      const remainingString = sqlString.slice(i, sqlString.length);
      const dollarStringStartMatch = remainingString.match(/^\$(?<name>[a-z_][0-9a-z_]*)?\$/i);
      if (dollarStringStartMatch) {
        currentDollarStringTagName = (_c = (_b = dollarStringStartMatch.groups) == null ? void 0 : _b.name) != null ? _c : "";
        continue;
      }
      continue;
    }
    if (isNamedReplacements && char === ":") {
      const previousChar = sqlString[i - 1];
      if (previousChar !== void 0 && !/[\s(,=]/.test(previousChar)) {
        continue;
      }
      const remainingString = sqlString.slice(i, sqlString.length);
      const match = remainingString.match(/^:(?<name>[a-z_][0-9a-z_]*)(?:\)|,|$|\s|::)/i);
      const replacementName = (_d = match == null ? void 0 : match.groups) == null ? void 0 : _d.name;
      if (!replacementName) {
        continue;
      }
      const replacementValue = replacements[replacementName];
      if (!Object.prototype.hasOwnProperty.call(replacements, replacementName) || replacementValue === void 0) {
        throw new Error(`Named replacement ":${replacementName}" has no entry in the replacement map.`);
      }
      const escapedReplacement = (0, import_sql_string.escape)(replacementValue, void 0, dialect.name, true);
      output += sqlString.slice(previousSliceEnd, i);
      previousSliceEnd = i + replacementName.length + 1;
      output += escapedReplacement;
      continue;
    }
    if (isPositionalReplacements && char === "?") {
      const previousChar = sqlString[i - 1];
      if (previousChar !== void 0 && !/[\s(,=]/.test(previousChar)) {
        continue;
      }
      const nextChar = sqlString[i + 1];
      if (nextChar === "|" || nextChar === "&") {
        continue;
      }
      const replacementIndex = ++lastConsumedPositionalReplacementIndex;
      const replacementValue = replacements[lastConsumedPositionalReplacementIndex];
      if (replacementValue === void 0) {
        throw new Error(`Positional replacement (?) ${replacementIndex} has no entry in the replacement map (replacements[${replacementIndex}] is undefined).`);
      }
      const escapedReplacement = (0, import_sql_string.escape)(replacementValue, void 0, dialect.name, true);
      output += sqlString.slice(previousSliceEnd, i);
      previousSliceEnd = i + 1;
      output += escapedReplacement;
    }
  }
  output += sqlString.slice(previousSliceEnd, sqlString.length);
  return output;
}
function isBackslashEscaped(string, pos) {
  let escaped = false;
  for (let i = pos; i >= 0; i--) {
    const char = string[i];
    if (char !== "\\") {
      break;
    }
    escaped = !escaped;
  }
  return escaped;
}
//# sourceMappingURL=sql.js.map
