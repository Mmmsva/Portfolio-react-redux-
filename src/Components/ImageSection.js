import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Sakina</span></h4>
                <p className="about-text">
                Junior Front End Developer. I'm passionate about writing codes and i hope my projects will leave positive impact on people,
                    environment and the society ~
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                       
                    </div>
                    <div className="right-section">
                        <p>: Sakina Mammadova</p>
                        <p>: 18</p>
                        <p>: Azerbaijan</p>
                        <p>: Azerbaijan, Turkish, English, Russian, Korean</p>
                        <p>: Khazar, Baku, Azerbaijan</p>
                        
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;