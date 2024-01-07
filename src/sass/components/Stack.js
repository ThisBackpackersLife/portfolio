import React from "react";
// Import SASS/CSS Styling:
import '../main.scss';

function Stack() {

    return (
        <section className="section-stack" id="stack">
                <h2 className="feature-heading u-center-text u-margin-top-big">My Stack</h2>
                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-archive-full"></i>
                            <h3 className="heading-tertiary-2 u-margin-bottom-small">Flask Python</h3>
                            <div className="feature-box__text">
                                <ul className="feature-box__list">
                                    <li className="feature-box__list-item">CRUD</li>
                                    <li className="feature-box__list-item">Authentication</li>
                                    <li className="feature-box__list-item">Custom/Private Routes</li>
                                    <li className="feature-box__list-item">RESTful API's & Web Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-gear"></i>
                            <h3 className="heading-tertiary-2 u-margin-bottom-small">React</h3>
                            <div className="feature-box__text">
                                <ul className="feature-box__list">
                                    <li className="feature-box__list-item">Redux</li>
                                    <li className="feature-box__list-item">Context</li>
                                    <li className="feature-box__list-item">Custom Hooks</li>
                                    <li className="feature-box__list-item">Component Architecture</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-pencil-ruler"></i>
                            <h3 className="heading-tertiary-2 u-margin-bottom-small">CSS/SASS</h3>
                            <div className="feature-box__text">
                                <ul className="feature-box__list">
                                    <li className="feature-box__list-item">BEM</li>
                                    <li className="feature-box__list-item">7-1 Structure</li>
                                    <li className="feature-box__list-item">Mixins & Nesting</li>
                                    <li className="feature-box__list-item">Reusable Components</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box__icon icon-basic-floppydisk"></i>
                            <h3 className="heading-tertiary-2 u-margin-bottom-small">SQL</h3>
                            <div className="feature-box__text">
                                <ul className="feature-box__list">
                                    <li className="feature-box__list-item">Querying</li>
                                    <li className="feature-box__list-item">Database Management</li>
                                    <li className="feature-box__list-item">Performance Optimization</li>
                                    <li className="feature-box__list-item">Data Modeling & Architecture</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Stack;