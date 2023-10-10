import React from "react";
// Import SASS/CSS Styling:
import '../main.scss';

function Stack() {

    return (
        <section className="section-stack">
                <h2 className="feature-heading u-center-text">My Stack</h2>
                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-archive-full"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Flask Python</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-gear"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">React</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-pencil-ruler"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">SASS/CSS</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-floppydisk"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">SQL</h3>
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