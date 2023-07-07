"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("./styles/index.css");
const react_router_dom_1 = require("react-router-dom");
const About_1 = __importDefault(require("./pages/About"));
const Home_1 = __importDefault(require("./pages/Home"));
const Logements_1 = __importDefault(require("./pages/Logements"));
const Header_1 = __importDefault(require("./components/Header"));
const Error_1 = __importDefault(require("./pages/Error"));
const Footer_1 = __importDefault(require("./components/Footer"));
client_1.default.createRoot(document.getElementById('root')).render(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement("div", { className: "screen" },
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Home_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/logement/:logementId", element: react_1.default.createElement(Logements_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/about", element: react_1.default.createElement(About_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(Error_1.default, null) }))),
        react_1.default.createElement(Footer_1.default, null))));
