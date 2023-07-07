import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Logement from './pages/Logements'
import Header from './components/Header'
import Error from './pages/Error'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Router>
      <Header />
      <div className="screen">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/logement/:logementId" element={<Logement />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  </>
)
