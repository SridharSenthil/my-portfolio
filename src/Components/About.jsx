import React from "react";
import '../Components/About.css';

const About =()=>{
    return(
        <>
        <div className="about-container">
            <div><h1>About Me</h1>
            <p>
            Hello! I'm Sridhar Senthilnathan, an aspiring Frontend Developer from Erode. Having recently completed my B.E., I am passionate about creating intuitive and engaging user experiences. I enjoy transforming ideas into dynamic web applications using technologies like HTML, CSS, and JavaScript. As a fresher, I am dedicated to continuous learning and eager to explore new tools that enhance my skills and enable me to contribute to impactful projects.
            </p>
            </div>
            <div>
            <h2>My Journy</h2>
            <p>
            My journey into the world of technology began during my engineering studies. Fascinated by how websites and applications come to life, I started exploring web development as a hobby. I dove into learning HTML, CSS, and JavaScript, creating small projects to build my skills and understanding.
            <br/>
            Now, as a fresher, I am excited to embark on my professional journey. I am eager to apply my knowledge, work on innovative projects, and continue learning in a dynamic environment where I can grow as a developer.
            </p>
            </div>
            <div>
            <h2>Skills</h2>
            <ol>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>  
            </ol>
            </div>
            <div>
            <h2>Education</h2>
                <p>
                   <ol><li>B.E EEE.,</li></ol> 
                </p>
            </div>
            <div>
            <h2>Interest</h2>
                <p>
                <ol>
                    <li>Coding</li>
                    <li>Cricket</li>
                    <li>Fitness</li>
                </ol>
                </p>
            </div>
            <div>
            <h2>Contact Me</h2>
            <p>LinkedIn:<a href="https://www.linkedin.com/in/sridhar-senthilnathan-ab87032a5" target="_blank">https://www.linkedin.com/in/sridhar-senthilnathan-ab87032a5</a></p>
            <p>Email:<a href="mailto:sridharsenthil97@gmail.com">mailto:sridharsenthil97@gmail.com</a></p>
            </div>
            <div>
            <h2>Future Goals</h2>
            <p>I aim to work with innovative technologies and contribute to impactful projects.</p>
            </div>
        </div>
        <div className="arrow">
        <a href="/resume" className="arrow-style"><i class="fas fa-arrow-right"></i></a>
        </div>
        </>
    )
}

export default About;