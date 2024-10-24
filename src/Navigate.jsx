import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Navigation.css';


const Navigation = () => {
    const [visible, setVisible] = useState(true);
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        lastScrollY = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;