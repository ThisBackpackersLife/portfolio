import React from "react";
// Import images here:
import explore from "../../images/explore.jpg";

function Popup2() {
    return(
        <div className="popup" id="popup2">
            <div className="popup__content">
                <div className="popup__left">
                    <div className="popup__img-container">
                        <img src={ explore } alt="Explore pic" className="popup__img popup__img-2" />
                    </div>
                    <div className="popup__vid-container">
                        <iframe
                            src="https://www.loom.com/embed/dec7cad90060412497d1d6cda0470642?sid=911ca220-ddfc-4656-b16e-1301999e2aad"
                            frameBorder="0"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                            allowFullScreen={ true }
                            style={{ position: 'absolute', top: 17, left: 21, width: '100%', height: '100%' }}
                        ></iframe>
                    </div>
                </div>
                <div className="popup__right">
                    <a href="#section-projects" className="popup__close">&times;</a>
                    <h2 className="heading-secondary popup__h2">Get to know my projects!</h2>
                    <h3 className="heading-tertiary popup__h3">ExploreMate</h3>
                    <p className="popup__text">
                    Have you ever struggled to keep track of all the details when planning a trip with multiple destinations? I know the feeling! That's why I created ExploreMate, a comprehensive travel planning tool. With ExploreMate, you can easily choose from a wide range of destinations, plan your trip down to the smallest detail, and even search for activities. In this video, I'll show you how to sign up, create a new trip, add destinations, and manage your itineraries. So, let's dive in and explore the amazing features of ExploreMate!
                    </p>
                    <div className="popup__btn-container">
                        <a href="#" className="btn btn--orange popup__btn-1">Reviews</a>
                        <a href="#" className="btn btn--orange popup__btn-2">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup2;