import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage.js'
import AboutMe from "./pages/aboutMe.js";
import UpperHeader from "./components/UpperHeader.js";


function App() {
    return (
        <Router>
            <UpperHeader />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="aboutMe" element={<AboutMe />} />
            </Routes>
        </Router>
    );
}

export default App;


