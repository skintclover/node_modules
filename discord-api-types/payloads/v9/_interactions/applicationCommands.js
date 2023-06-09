"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCommandType = void 0;
__exportStar(require("./_applicationCommands/chatInput"), exports);
__exportStar(require("./_applicationCommands/contextMenu"), exports);
__exportStar(require("./_applicationCommands/permissions"), exports);
/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
 */
var ApplicationCommandType;
(function (ApplicationCommandType) {
    ApplicationCommandType[ApplicationCommandType["ChatInput"] = 1] = "ChatInput";
    ApplicationCommandType[ApplicationCommandType["User"] = 2] = "User";
    ApplicationCommandType[ApplicationCommandType["Message"] = 3] = "Message";
})(ApplicationCommandType = exports.ApplicationCommandType || (exports.ApplicationCommandType = {}));
//# sourceMappingURL=applicationCommands.js.map