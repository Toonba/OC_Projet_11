import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Logement from './pages/Logements';
import Header from './components/Header';
import Error from './pages/Error';
import Footer from './components/Footer';
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(React.Fragment, null,
    React.createElement(Router, null,
        React.createElement(Header, null),
        React.createElement("div", { className: "screen" },
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
                React.createElement(Route, { path: "/logement/:logementId", element: React.createElement(Logement, null) }),
                React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
                React.createElement(Route, { path: "*", element: React.createElement(Error, null) }))),
        React.createElement(Footer, null))));
