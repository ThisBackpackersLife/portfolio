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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra convallis posuere morbi leo urna. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Nisl vel pretium lectus quam. Integer enim neque volutpat ac tincidunt vitae. Sed faucibus turpis in eu mi bibendum. Sed euismod nisi porta lorem mollis. Maecenas sed enim ut sem viverra aliquet eget. Rhoncus mattis rhoncus urna neque. Tortor consequat id porta nibh venenatis cras sed. Eget dolor morbi non arcu risus quis. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Vitae elementum curabitur vitae nunc sed. Imperdiet dui accumsan sit amet. Mauris in aliquam sem fringilla ut morbi tincidunt. Non enim praesent elementum facilisis leo.
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