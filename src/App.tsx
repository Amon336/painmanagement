import React from 'react';
import { Navigation } from './NavBar copy/navigation';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Prices } from './prices copy/prices';
import { Home } from './Home/home';
import { Workers } from './workers/workers';
import './App.scss';
import { Intro } from './introduction/intro';
import { Advertisement } from './advertisement/advertisement';

function App() {
    return (
            <Router>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/prices/*' element={<Prices />} />
                    <Route path='/intro/*' element={<Intro />} />
                    <Route path='/workers' element={<Workers />} />
                    <Route path='/advertisement' element={<Advertisement />} />
                </Routes>
            </Router>
    );
}

export default App;
