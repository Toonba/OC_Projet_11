"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../styles/footer.css");
const react_1 = __importDefault(require("react"));
const LogoWhite = require('../../assets/Logo-white.png');
const Footer = () => {
    return (react_1.default.createElement("footer", null,
        react_1.default.createElement("img", { className: "footer-logo", src: LogoWhite, alt: "logo footer" }),
        react_1.default.createElement("p", { className: "footer-text" }, "\u00A9 2020 Kasa. all rights reserved")));
};
exports.default = Footer;
