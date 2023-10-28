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
                    <a href="#section-projects" className="popup__close">&times;</a>
                    <h2 className="heading-secondary">Get to know my projects!</h2>
                    <h3 className="heading-tertiary">Culinary Critic</h3>
                    <p className="popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra convallis posuere morbi leo urna. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Nisl vel pretium lectus quam. Integer enim neque volutpat ac tincidunt vitae. Sed faucibus turpis in eu mi bibendum. Sed euismod nisi porta lorem mollis. Maecenas sed enim ut sem viverra aliquet eget. Rhoncus mattis rhoncus urna neque. Tortor consequat id porta nibh venenatis cras sed. Eget dolor morbi non arcu risus quis. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Vitae elementum curabitur vitae nunc sed. Imperdiet dui accumsan sit amet. Mauris in aliquam sem fringilla ut morbi tincidunt. Non enim praesent elementum facilisis leo.
                    </p>
                </div>
                <div className="popup__btn-container">
                    <a href="#" className="btn btn--orange popup__btn-1">Reviews</a>
                    <a href="#" className="btn btn--orange popup__btn-2">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Popup3;