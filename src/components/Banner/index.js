"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../../styles/banner.css");
const Banner = () => {
    return (react_1.default.createElement("section", { className: "banner-bg" },
        react_1.default.createElement("h1", { className: "banner-title" },
            "Chez vous,",
            react_1.default.createElement("br", null),
            " partout et ailleurs")));
};
exports.default = Banner;
