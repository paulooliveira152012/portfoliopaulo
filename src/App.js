import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage.js'
import AboutMe from "./pages/aboutMe.js";
import UpperHeader from "./components/UpperHeader.js";


function App() {
    return (
        <div style={{backgroundColor: "black"}}>
        <div style={{maxWidth: "1200px", margin: "auto"}}>
        <Router>
            <UpperHeader />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="aboutMe" element={<AboutMe />} />
            </Routes>
        </Router>
        </div>
        </div>
    );
}

export default App;


