"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../styles/infoGeneral.css");
const react_1 = __importDefault(require("react"));
const starEmpty = require('../../assets/star-empty.svg');
const starFull = require('../../assets/star-full.svg');
const InfoGeneral = ({ title, location, hostName, hostPic, tags, rate }) => {
    const range = [1, 2, 3, 4, 5];
    return (react_1.default.createElement("section", { className: "general-info" },
        react_1.default.createElement("article", { className: "location-tag" },
            react_1.default.createElement("div", { className: "location" },
                react_1.default.createElement("h2", null, title),
                react_1.default.createElement("h3", null, location)),
            react_1.default.createElement("div", { className: "tag" }, tags.map((tag, index) => (react_1.default.createElement("span", { key: `${tag}-${index}`, className: "tag-item" }, tag))))),
        react_1.default.createElement("article", { className: "host-rating" },
            react_1.default.createElement("div", { className: "host" },
                react_1.default.createElement("h3", null,
                    hostName.split(' ')[0],
                    " ",
                    react_1.default.createElement("br", null),
                    " ",
                    hostName.split(' ')[1]),
                react_1.default.createElement("div", { className: "host-picture" },
                    react_1.default.createElement("img", { src: hostPic, alt: hostName }))),
            react_1.default.createElement("div", { className: "rating" }, range.map((rangeElem, index) => (parseInt(rate) >= rangeElem ? react_1.default.createElement("img", { key: `${rangeElem}-${index}`, src: starFull, alt: "icone \u00E9toile remplis" }) : react_1.default.createElement("img", { key: `${rangeElem}-${index}`, src: starEmpty, alt: "icone \u00E9toile vide" })))))));
};
exports.default = InfoGeneral;
