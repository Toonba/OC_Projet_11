import '../../styles/infoGeneral.css';
import React from 'react';
const starEmpty = require('../../assets/star-empty.svg');
const starFull = require('../../assets/star-full.svg');
const InfoGeneral = ({ title, location, hostName, hostPic, tags, rate }) => {
    const range = [1, 2, 3, 4, 5];
    return (React.createElement("section", { className: "general-info" },
        React.createElement("article", { className: "location-tag" },
            React.createElement("div", { className: "location" },
                React.createElement("h2", null, title),
                React.createElement("h3", null, location)),
            React.createElement("div", { className: "tag" }, tags.map((tag, index) => (React.createElement("span", { key: `${tag}-${index}`, className: "tag-item" }, tag))))),
        React.createElement("article", { className: "host-rating" },
            React.createElement("div", { className: "host" },
                React.createElement("h3", null,
                    hostName.split(' ')[0],
                    " ",
                    React.createElement("br", null),
                    " ",
                    hostName.split(' ')[1]),
                React.createElement("div", { className: "host-picture" },
                    React.createElement("img", { src: hostPic, alt: hostName }))),
            React.createElement("div", { className: "rating" }, range.map((rangeElem, index) => (parseInt(rate) >= rangeElem ? React.createElement("img", { key: `${rangeElem}-${index}`, src: "../../assets/star-full.svg", alt: "icone \u00E9toile remplis" }) : React.createElement("img", { key: `${rangeElem}-${index}`, src: starEmpty, alt: "icone \u00E9toile vide" })))))));
};
export default InfoGeneral;
