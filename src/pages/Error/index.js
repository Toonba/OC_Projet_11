import { Link } from 'react-router-dom';
import React from 'react';
import '../../styles/error.css';
const Error = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "error-container" },
            React.createElement("h2", null, "404"),
            React.createElement("h3", null, "Oups! La page que vous demandez n'existe pas."),
            React.createElement(Link, { className: 'test', to: "/" }, "Retourner sur la page d'accueil"))));
};
export default Error;
