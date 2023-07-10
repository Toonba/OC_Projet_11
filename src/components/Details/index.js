import Colapse from '../Colapse';
import React from 'react';
import '../../styles/details.css';
const Details = ({ description, equipments }) => {
    return (React.createElement("section", { className: "details-container" },
        React.createElement(Colapse, { title: "Description", description: description, type: "text" }),
        React.createElement(Colapse, { title: "\u00C9quipements", description: equipments, type: "array" })));
};
export default Details;
