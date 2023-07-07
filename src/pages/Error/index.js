"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = __importDefault(require("react"));
require("../../styles/error.css");
const Error = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("section", { className: "error-container" },
            react_1.default.createElement("h2", null, "404"),
            react_1.default.createElement("h3", null, "Oups! La page que vous demandez n'existe pas."),
            react_1.default.createElement(react_router_dom_1.Link, { className: 'test', to: "/" }, "Retourner sur la page d'accueil"))));
};
exports.default = Error;
