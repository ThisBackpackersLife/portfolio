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
                    <h2 className="heading-secondary">Get to know my projects!</h2>
                    <h3 className="heading-tertiary">ExploreMate</h3>
                    <p className="popup__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra convallis posuere morbi leo urna. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Nisl vel pretium lectus quam. Integer enim neque volutpat ac tincidunt vitae. Sed faucibus turpis in eu mi bibendum. Sed euismod nisi porta lorem mollis. Maecenas sed enim ut sem viverra aliquet eget. Rhoncus mattis rhoncus urna neque. Tortor consequat id porta nibh venenatis cras sed. Eget dolor morbi non arcu risus quis. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Vitae elementum curabitur vitae nunc sed. Imperdiet dui accumsan sit amet. Mauris in aliquam sem fringilla ut morbi tincidunt. Non enim praesent elementum facilisis leo.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Popup2;