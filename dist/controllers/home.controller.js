"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class HomeController {
    constructor() {
        this.path = "/";
        this.router = express.Router();
        this.index = (req, res) => {
            const users = [
                {
                    id: 1,
                    name: "Lady Gaga",
                },
                {
                    id: 2,
                    name: "Michel",
                },
                {
                    id: 3,
                    name: "Alams",
                },
            ];
            res.render("home/index", { users });
        };
        this.initRoutes();
    }
    initRoutes() {
        this.router.get("/", this.index);
    }
}
exports.default = HomeController;
//# sourceMappingURL=home.controller.js.map