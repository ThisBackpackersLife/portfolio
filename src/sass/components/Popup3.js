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
                </div>
                <div className="popup__right">
                    
                </div>
            </div>
        </div>
    )
}

export default Popup3;