import React from "react";
// Import images here:
import culinary from "../../images/culinary.jpg";

function Popup3() {
    return (
        <div className="popup" id="popup3">
            <div className="popup__content">
                <div className="popup__left">
                    <div className="popup__img-container">
                        <img src={ culinary } alt="Culinary pic" className="popup__img popup__img-3" />
                    </div>
                    <div className="popup__vid-container">
                        <iframe 
                            src="https://www.loom.com/embed/70ded0f6364042d7b51b997db4ffce80?sid=23ca1979-5520-4a94-a7fc-bd4b8a866dec" 
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
                    <h2 className="heading-secondary-3 popup__h2">Get to know my projects!</h2>
                    <h3 className="heading-tertiary popup__h3">Culinary Critic</h3>
                    <p className="popup__text">
                        Culinary Critic is an innovative web application designed to elevate restaurant discovery and user experiences through comprehensive restaurant reviews. The platform empowers users to explore an extensive array of restaurants by employing diverse search criteria such as keywords, cuisines, price ranges, and dietary considerations. Central to its functionality is the ability for users to rate and review their preferred dining spots, fostering a community-driven hub for culinary enthusiasts. Culinary Critic amalgamates cutting-edge technologies to deliver a seamless and engaging platform for culinary enthusiasts, fostering a vibrant community centered around exploring, reviewing, and sharing remarkable dining experiences.
                    </p>
                    <div className="popup__btn-container">
                        <a href="#section-reviews" className="btn btn--blue popup__btn-1">Reviews</a>
                        <a href="#section-contact" className="btn btn--blue popup__btn-2">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup3;