"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
require("../../styles/caroussel.css");
const Caroussel = ({ source, alt }) => {
    const [count, updateCount] = (0, react_1.useState)(0);
    return (react_2.default.createElement("section", { className: "caroussel" },
        source.map((picture, index) => (react_2.default.createElement("img", { key: `${picture}-${index}`, src: picture, alt: alt, className: source[count] === picture ? 'caroussel-img show-picture' : 'caroussel-img hide-picture' }))),
        source.length > 1 ? react_2.default.createElement("i", { className: "fa-solid fa-chevron-left", onClick: () => (count === 0 ? updateCount(source.length - 1) : updateCount(count - 1)) }) : null,
        source.length > 1 ? react_2.default.createElement("span", { className: "caroussel-count" }, `${count + 1}/${source.length}`) : null,
        source.length > 1 ? react_2.default.createElement("i", { className: "fa-solid fa-chevron-right", onClick: () => (count === source.length - 1 ? updateCount(0) : updateCount(count + 1)) }) : null));
};
exports.default = Caroussel;
