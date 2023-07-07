"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Colapse_1 = __importDefault(require("../../components/Colapse"));
const about_1 = __importDefault(require("../../datas/about"));
const react_1 = __importDefault(require("react"));
require("../../styles/about.css");
const About = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("section", { className: 'banner-about' }),
        react_1.default.createElement("section", { className: "about-details" }, about_1.default.map((element, index) => (react_1.default.createElement(Colapse_1.default, { title: element.titre, description: element.text, type: "text", key: `${element.titre}-${index}` }))))));
};
exports.default = About;
