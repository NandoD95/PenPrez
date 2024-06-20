import React from "react";
import jakeJpeg from "../components/images/jake.jpeg";
import vinJpeg from "../components/images/vincent.jpeg";

function About(){
    return(
        <div className="about-container">
            <div className="image-and-text-container">
                <div className="image-text-wrapper">
                    <img src={jakeJpeg} alt="Jake" className="about-image" />
                    <div className="jake-text">
                        <h1>About Jake</h1>
                        <p>My passion for finance, relationship, and writing has led me to work experience in private financial sales and business writing. Through my experiences, I have identified critical weaknesses in businesses' ability to scale, which my background equips me to understand and address effectively. PenPrez allows me to address these weaknesses effectively and help businesses’ flourish while bringing all my passions together, truly a dream come true!</p>
                    </div>
                </div>
                <div className="image-text-wrapper">
                    <img src={vinJpeg} alt="Vinny" className="about-image" />
                    <div className="vinny-text">
                        <h1>About Vinny</h1>
                        <li><p>Throughout my four years at The University of Tampa, my passion for finance and relationship-building has been the driving force behind my achievements and personal growth. From the very beginning, I've been fueled by an unwavering desire to assist others in overcoming challenges and achieving their goals.</p></li>
                        <li><p>Penprez represents an exciting opportunity for me to continue pursuing my passion. At Penprez, I am empowered to help businesses scale and thrive by providing strategic financial insights and solutions. This role not only allows me to leverage my financial expertise but also enables me to cultivate and nurture lasting relationships with clients. I am deeply committed to contributing to their success, fostering trust, and building partnerships that stand the test of time.</p></li>
                        <li><p>My experience at The University of Tampa has equipped me with the skills and knowledge necessary to excel in this field. It has also reinforced my belief in the importance of helping others succeed. With Penprez, I am thrilled to be in a position where I can make a meaningful impact, guiding businesses towards growth and prosperity while forming enduring connections that benefit all parties involved.</p></li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;