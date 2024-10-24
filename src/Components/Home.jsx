import React from "react";
import './Home.css';
import Myphoto from '../assets/Myphoto.jpg';



const Home =()=> {
    return(
        <>
        <div className="container">
            <div className="text">
            <h1>&lt;Hi, I'm <span>Sridhar Senthilnathan</span>&gt;</h1>
            <br/>
            <br/>
            <p>
            A passionate newbie with a strong foundation in web development. I specialize in HTML, CSS, JavaScript, and React, and I’m eager to leverage these skills in a challenging frontend development role.
            </p>    
            </div>
            <div className="photo">
                <img src={Myphoto} alt="my photo" />
                <h2><i>Frontend Developer</i></h2>
            </div>
        </div>
        <div className="social-network">
            <p>find me with</p> 
            <div className="social-network-left">
            <div className="logo-pad">
            <a href="https://www.linkedin.com/in/sridhar-senthilnathan-ab87032a5" target="_blank"><i class="fab fa-linkedin"  ></i></a>
            <a href="https://www.instagram.com/sridhar.techie/profilecard/?igsh=cnl6cnVoMzUxcGg3" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://wa.me/919730314877" target="_blank"><i class="fab fa-whatsapp" ></i></a>
            </div>
            <div className="arrow">
            <a href="/about" className="arrow-style"><i class="fas fa-arrow-right"></i></a>
            </div>
            </div>
        </div>
        </>
    )
}

export default Home;