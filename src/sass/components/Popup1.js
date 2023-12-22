import React from "react";
// Import images here:
import education from "../../images/Education.jpg";

function Popup1() {
    return (
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <div className="popup__img-container">
                        <img src={ education } alt="Education pic" className="popup__img popup__img-1" />                       
                    </div>
                    <div className="popup__vid-container">
                        <iframe 
                            src="https://www.loom.com/embed/126dbef4aad145ab9bf17190665874ac?sid=99a86403-f7ac-416a-9cf7-7f6d14f85ce8" 
                            frameBorder="0"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                            allowFullScreen={ true }
                            style={{ position: 'absolute', top: 17, left: 21, width: '100%', height: '100%' }}>
                        </iframe>
                    </div>
                </div>
                <div className="popup__right">
                    <a href="#section-projects" className="popup__close">&times;</a>
                    <h2 className="heading-secondary-2 popup__h2">Get to know my projects!</h2>
                    <h3 className="heading-tertiary popup__h3">Learn-Link</h3>
                    <p className="popup__text">
                        Learn-Link is an award winning inclusive and AI-driven educational platform meticulously crafted to impart elementary mathematical education for individuals with diverse accessibility needs. Embodying a profound commitment to breaking down barriers, our platform is driven by a resolute mission to empower skill enhancement, foster self-assurance, and pave pathways toward a brighter future for our audience. At the core of Learn-Link's distinction lies her multifaceted role, transcending the conventions of an AI-powered chatbot. Named Adda, our chatbot assumes the persona of a friendly and guiding companion, tailor-made for each user's learning journey. Her adaptability to individual learning styles, adeptness in simplifying intricate concepts into approachable explanations, her unwavering support and patience, redefine the learning experience.
                    </p>
                    <div className="popup__btn-container">
                        <a href="#" className="btn btn--green popup__btn-1">Reviews</a>
                        <a href="#" className="btn btn--green popup__btn-2">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup1;