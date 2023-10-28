import React from "react";
// Import images here:
import explore from "../../images/explore.jpg";

function Popup2() {
    return(
        <div className="popup" id="popup2">
            <div className="popup__content">
                <div className="popup__left">
                    <div className="popup__img-container">
                        <img src={ explore } alt="Explore pic" className="popup__img-2" />
                    </div>
                </div>
                <div className="popup__right">
                    <a href="#section-projects" className="popup__close">&times;</a>
                    <h2 className="heading-secondary">Get to know ExploreMate!</h2>
                </div>
            </div>
        </div>
    )
}

export default Popup2;