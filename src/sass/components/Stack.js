import React from "react";
// Import SASS/CSS Styling:
import '../main.scss';

function Stack() {

    return (
        <section className="section-features">
                <h2 className="feature-heading u-center-text">My Stack</h2>
                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-world"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Flask Python</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Stack;