import React from 'react'
import LandingPage from './LandingPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './MainPage/MainPage';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/properties" element={<MainPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
