import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import About from '../About.jsx'
import App from '../App.jsx'

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes