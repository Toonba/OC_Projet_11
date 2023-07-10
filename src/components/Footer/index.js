import '../../styles/footer.css';
import React from 'react';
const LogoWhite = require('../../assets/Logo-white.png');
const Footer = () => {
    return (React.createElement("footer", null,
        React.createElement("img", { className: "footer-logo", src: LogoWhite, alt: "logo footer" }),
        React.createElement("p", { className: "footer-text" }, "\u00A9 2020 Kasa. all rights reserved")));
};
export default Footer;
