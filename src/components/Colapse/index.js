"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("../../styles/colapse.css");
const Colapse = ({ title, description, type }) => {
    const [isOpen, updateIsOpen] = (0, react_1.useState)(false);
    return (react_1.default.createElement("aside", { className: "colapse-container" },
        react_1.default.createElement("div", { className: "colapse-title", onClick: () => (isOpen ? updateIsOpen(false) : updateIsOpen(true)) },
            react_1.default.createElement("h2", null, title),
            isOpen ? react_1.default.createElement("i", { className: "fa-solid fa-chevron-up" }) : react_1.default.createElement("i", { className: "fa-solid fa-chevron-down" })),
        react_1.default.createElement("div", { className: isOpen ? 'content show' : 'content' }, Array.isArray(description) ? (react_1.default.createElement("ul", { className: "colapse-description" }, description.map((equipment, index) => (react_1.default.createElement("li", { key: `${equipment}-${index}` }, equipment))))) : (react_1.default.createElement("p", { className: "colapse-description" },
            " ",
            description)))));
};
exports.default = Colapse;
