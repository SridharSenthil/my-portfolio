import React from "react";
import '../Components/Resume.css';

const Resume =()=> {
    return(
        <> 
        <div className="resume-container">
            <h1>
                My Resume
            </h1>
            <object data='\SRIDHAR SENTHILNATHAN.pdf'
            width="100%"
            height="600px"
            type="application/pdf"><p><a href="\SRIDHAR_SENTHILNATHAN.pdf"></a></p></object>
            <a
        href="\SRIDHAR_SENTHILNATHAN.pdf" 
        download="SRIDHAR_SENTHILNATHAN.pdf"
        className="download-button"
      >Dowload Resume</a>
        </div>
        <div className="arrow">
        <a href="/contact" className="arrow-style"><i class="fas fa-arrow-right"></i></a>
        </div>
        </>
    );
;}

export default Resume;  