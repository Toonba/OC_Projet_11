"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CardLogement_1 = __importDefault(require("../../components/CardLogement"));
const Banner_1 = __importDefault(require("../../components/Banner"));
const Home = () => {
    // const { logementTitle } = useParams()
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Banner_1.default, null),
        react_1.default.createElement(CardLogement_1.default, null)));
};
exports.default = Home;
