import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Components/Home';
import About from '../src/Components/About';
import Contact from '../src/Components/Contact';
import Resume from '../src/Components/Resume';
import Navigation from "./Navigate";
import './App.css';

const App = () => {
    console.log("Home:", Home);
    console.log("About:", About);
    console.log("Contact:", Contact);
    console.log("Resume:", Resume);
    return(
        <Router>
            <Navigation/>
            <div>
                <Routes>
                    <Route path="/" element = {<Home/>}/>
                    <Route path="/about" element = {<About/>}/>
                    <Route path="/contact" element = {<Contact/>}/>
                    <Route path="/resume" element = {<Resume/>}/>
                </Routes>
            </div>
        </Router>
    )
} 

export default App;