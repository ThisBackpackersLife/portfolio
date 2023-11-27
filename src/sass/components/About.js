import React from "react";
// Import Images:
import chichenImg from "../../images/ChichenItza.jpg";
import cocoroImg from "../../images/ValleDelCocoro.jpg";
import sanCrisImage from "../../images/SanCristobal.jpg";

// Import SASS/CSS Styling:
import '../main.scss';

function About() {
    return (
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Meet the Engineer
                </h2>
            </div>
            <div className="row">
                    <div className="col-1-of-2">
                    <h3 className="heading-tertiary-2 u-margin-bottom-small">Travel & Family First</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate exercitationem, asperiores dolorum nisi fuga facilis sint voluptates eos porro, reiciendis libero incidunt corrupti voluptas aliquam! Voluptates similique ut error!
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">Pursuing My Passion</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium et blanditiis quasi, est sequi praesentium a inventore? Ex animi error harum dolorem asperiores nemo mollitia suscipit nostrum, numquam vitae debitis?
                        </p>

                        <a href="#" className="btn-text">🤓 Let's collab! &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={ chichenImg } alt="Chichen Itza" className="composition__photo composition__photo--p1" />
                            <img src={ cocoroImg } alt="Valle del Cocoro" className="composition__photo composition__photo--p2" />
                            <img src={ sanCrisImage } alt="San Cristobal de las Casas" className="composition__photo composition__photo--p3" />
                        </div> 
                    </div>
                </div>
        </section>
    )
}

export default About;