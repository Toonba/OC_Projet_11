import { useState } from 'react';
import React from 'react';
import '../../styles/caroussel.css';
const Caroussel = ({ source, alt }) => {
    const [count, updateCount] = useState(0);
    return (React.createElement("section", { className: "caroussel" },
        source.map((picture, index) => (React.createElement("img", { key: `${picture}-${index}`, src: picture, alt: alt, className: source[count] === picture ? 'caroussel-img show-picture' : 'caroussel-img hide-picture' }))),
        source.length > 1 ? React.createElement("i", { className: "fa-solid fa-chevron-left", onClick: () => (count === 0 ? updateCount(source.length - 1) : updateCount(count - 1)) }) : null,
        source.length > 1 ? React.createElement("span", { className: "caroussel-count" }, `${count + 1}/${source.length}`) : null,
        source.length > 1 ? React.createElement("i", { className: "fa-solid fa-chevron-right", onClick: () => (count === source.length - 1 ? updateCount(0) : updateCount(count + 1)) }) : null));
};
export default Caroussel;
