import React from 'react'
import LandingPage from './LandingPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Details from './MainPage/Routes/Details/Details';
import Update from './MainPage/Routes/Update/Update';
import { PropertiesContextProvider } from './Context/PropertiesContext';

function App() {
    return (
        <div>
            <PropertiesContextProvider>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<LandingPage />} />
                        <Route exact path="/properties" element={<MainPage />} />
                        <Route exact path="/properties/:id" element={<Details />} />
                        <Route exact path="/properties/:id/update" element={<Update />} />
                    </Routes>
                </Router>
            </PropertiesContextProvider>
        </div>
    )
}

export default App
