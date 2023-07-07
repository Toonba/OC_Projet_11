"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../../datas/data"));
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("../../styles/cardLogement.css");
const CardLogement = () => {
    return (react_1.default.createElement("section", { className: "cardLogement-bg" },
        react_1.default.createElement("ul", { className: "cardLogement-list-container" }, data_1.default.map((logement) => (react_1.default.createElement(react_router_dom_1.Link, { key: logement.id, to: `/logement/${logement.id}`, className: "cardLogement-Item" },
            react_1.default.createElement("img", { src: logement.cover, alt: logement.title, className: "cardLogement-picture" }),
            react_1.default.createElement("li", { className: "cardLogement-title" }, logement.title)))))));
};
exports.default = CardLogement;
