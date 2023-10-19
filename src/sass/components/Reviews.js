import React from "react";
// Import pictures here
import nathImg from "../../images/Nath.jpg";

function Reviews() {

    return(
        <section className="section-reviews">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="feature-heading u-center-text u-margin-top-big">Reviews</h2>
            </div>
            <div class="row">
                <div class="review">
                    <figure className="review__shape">
                        <img src={ nathImg } alt="Nathalia" className="review__img" />
                        <figcaption className="story__caption">Nathalia Andrade</figcaption>
                    </figure>
                    <div className="review__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">Nathalia Andrade: UX/UI Designer 🎨✨</h3>
                        <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate exercitationem, asperiores dolorum nisi fuga facilis sint voluptates eos porro, reiciendis libero incidunt corrupti voluptas aliquam! Voluptates similique ut error! Quas cupiditate exercitationem, asperiores dolorum nisi fuga facilis sint voluptates eos porro, reiciendis libero incidunt corrupti voluptas aliquam! Voluptates similique ut error.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;