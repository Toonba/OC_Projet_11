"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Colapse_1 = __importDefault(require("../Colapse"));
const react_1 = __importDefault(require("react"));
require("../../styles/details.css");
const Details = ({ description, equipments }) => {
    return (react_1.default.createElement("section", { className: "details-container" },
        react_1.default.createElement(Colapse_1.default, { title: "Description", description: description, type: "text" }),
        react_1.default.createElement(Colapse_1.default, { title: "\u00C9quipements", description: equipments, type: "array" })));
};
exports.default = Details;
