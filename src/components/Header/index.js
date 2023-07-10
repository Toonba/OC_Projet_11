import { Link } from 'react-router-dom';
import React from 'react';
import '../../styles/header.css';
const Logo = require('../../assets/Logo.png');
function Header() {
    return (React.createElement("header", null,
        React.createElement(Link, { to: "/" },
            React.createElement("img", { src: Logo, alt: "logo", className: "logo" })),
        React.createElement("nav", null,
            React.createElement(Link, { to: "/", className: "header-link" }, "Accueil"),
            React.createElement(Link, { to: "/about", className: "header-link" }, "A Propos"))));
}
export default Header;
