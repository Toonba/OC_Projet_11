import React, { useState } from 'react';
import '../../styles/colapse.css';
const Colapse = ({ title, description, type }) => {
    const [isOpen, updateIsOpen] = useState(false);
    return (React.createElement("aside", { className: "colapse-container" },
        React.createElement("div", { className: "colapse-title", onClick: () => (isOpen ? updateIsOpen(false) : updateIsOpen(true)) },
            React.createElement("h2", null, title),
            isOpen ? React.createElement("i", { className: "fa-solid fa-chevron-up" }) : React.createElement("i", { className: "fa-solid fa-chevron-down" })),
        React.createElement("div", { className: isOpen ? 'content show' : 'content' }, Array.isArray(description) ? (React.createElement("ul", { className: "colapse-description" }, description.map((equipment, index) => (React.createElement("li", { key: `${equipment}-${index}` }, equipment))))) : (React.createElement("p", { className: "colapse-description" },
            " ",
            description)))));
};
export default Colapse;
