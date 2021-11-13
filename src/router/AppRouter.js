import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route} 
    from 'react-router-dom';
import { Home } from '../components/Home';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                </Routes>
            </Router>
        </>
    )
}