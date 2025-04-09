import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import About from '../About.jsx'
import App from '../App.jsx'
import Nopage from '../screens/Nopage.jsx';
import Passwordgen from '../../apps/PasswordGen/Passwordgen.jsx';

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/password" element={<Passwordgen />} />
                <Route path="*" element={<Nopage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes