import React from "react";
// Import pictures here
import nathImg from "../../images/Nath.jpg";
import sterlingImg from "../../images/Sterling.jpg";
import macoImg from "../../images/Maco.jpg";
import waveMp4 from "../../images/Waves.mp4";
import waveWebm from "../../images/Waves.webm"

function Reviews() {

    return(
        <section className="section-reviews">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop playsInline>
                    <source src={ waveMp4 } type="video/mp4" />
                    <source src={ waveWebm } type="video/webm" />
                    Your browser is not supported!
                </video>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="feature-heading u-center-text u-margin-top-big">Reviews</h2>
            </div>

            <div className="row">
                <div className="review">
                    <figure className="review__shape">
                        <img src={ sterlingImg } alt="Sterling" className="review__img" />
                        <figcaption className="review__caption">Sterling Barton</figcaption>
                    </figure>
                    <div className="review__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">Sterling Barton: Software Engineer 👩‍💻📱🌐</h3>
                        <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate exercitationem, asperiores dolorum nisi fuga facilis sint voluptates eos porro, reiciendis libero incidunt corrupti voluptas aliquam! Voluptates similique ut error! Quas cupiditate exercitationem, asperiores dolorum nisi fuga facilis sint voluptates eos porro, reiciendis libero incidunt corrupti voluptas aliquam! Voluptates similique ut error.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="review">
                    <figure className="review__shape">
                        <img src={ nathImg } alt="Nathalia" className="review__img" />
                        <figcaption className="review__caption">Nathalia Andrade</figcaption>
                    </figure>
                    <div className="review__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">Nathalia Andrade: UX/UI Designer 🎨✨🖥️</h3>
                        <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate exercitationem, asperiores dolorum nisi fuga facilis sint voluptates eos porro, reiciendis libero incidunt corrupti voluptas aliquam! Voluptates similique ut error! Quas cupiditate exercitationem, asperiores dolorum nisi fuga facilis sint voluptates eos porro, reiciendis libero incidunt corrupti voluptas aliquam! Voluptates similique ut error.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="review">
                    <figure className="review__shape">
                        <img src={ macoImg } alt="Maco" className="review__img" />
                        <figcaption className="review__caption">Macolister Bispo</figcaption>
                    </figure>
                    <div className="review__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">Macolister Bispo: Full Stack Developer 🧑‍💻📱💾</h3>
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