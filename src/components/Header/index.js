"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = __importDefault(require("react"));
require("../../styles/header.css");
const Logo = require('../../assets/Logo.png');
function Header() {
    return (react_1.default.createElement("header", null,
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
            react_1.default.createElement("img", { src: Logo, alt: "logo", className: "logo" })),
        react_1.default.createElement("nav", null,
            react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "header-link" }, "Accueil"),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/about", className: "header-link" }, "A Propos"))));
}
exports.default = Header;
