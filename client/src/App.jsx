import React from 'react'
import LandingPage from './Routes/LandingPage/LandingPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './Routes/MainPage/MainPage';
import Details from './Routes/Details/Details';
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
                        </Routes>
                    </Router>
                </PropertiesContextProvider>
        </div>
    )
}

export default App
