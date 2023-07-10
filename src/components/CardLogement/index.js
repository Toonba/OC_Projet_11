import data from '../../datas/data';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/cardLogement.css';
const CardLogement = () => {
    return (React.createElement("section", { className: "cardLogement-bg" },
        React.createElement("ul", { className: "cardLogement-list-container" }, data.map((logement) => (React.createElement(Link, { key: logement.id, to: `/logement/${logement.id}`, className: "cardLogement-Item" },
            React.createElement("img", { src: logement.cover, alt: logement.title, className: "cardLogement-picture" }),
            React.createElement("li", { className: "cardLogement-title" }, logement.title)))))));
};
export default CardLogement;
