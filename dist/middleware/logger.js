"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggerMiddleware = (req, resp) => {
    console.log("Request logged:", req.method, req.path);
};
exports.default = loggerMiddleware;
//# sourceMappingURL=logger.js.map