import Colapse from '../../components/Colapse';
import about from '../../datas/about';
import React from 'react';
import '../../styles/about.css';
const About = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: 'banner-about' }),
        React.createElement("section", { className: "about-details" }, about.map((element, index) => (React.createElement(Colapse, { title: element.titre, description: element.text, type: "text", key: `${element.titre}-${index}` }))))));
};
export default About;
