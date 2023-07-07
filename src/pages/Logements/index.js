"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const data_1 = __importDefault(require("../../datas/data"));
const Caroussel_1 = __importDefault(require("../../components/Caroussel"));
const InfoGeneral_1 = __importDefault(require("../../components/InfoGeneral"));
const Details_1 = __importDefault(require("../../components/Details"));
const Error_1 = __importDefault(require("../Error"));
const Logement = () => {
    const { logementId } = (0, react_router_dom_1.useParams)();
    const logement = data_1.default.filter((element) => element.id === logementId);
    if (logement.length === 0) {
        return react_1.default.createElement(Error_1.default, null);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Caroussel_1.default, { source: logement[0].pictures, alt: logement[0].title }),
        react_1.default.createElement(InfoGeneral_1.default, { title: logement[0].title, location: logement[0].location, hostName: logement[0].host.name, hostPic: logement[0].host.picture, tags: logement[0].tags, rate: logement[0].rating }),
        react_1.default.createElement(Details_1.default, { description: logement[0].description, equipments: logement[0].equipments })));
};
exports.default = Logement;
