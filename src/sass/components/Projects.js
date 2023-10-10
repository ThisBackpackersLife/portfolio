import React from "react";
// Import SASS/CSS Styling:
import '../main.scss';

function Projects() {

    return (
        <section className="section-projects">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        My software creations
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading--span card__heading--span--1">Learn-Link</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Learn easy</li>
                                        <li>For those with disabilities</li>
                                        <li>Chat with our AI chatbot</li>
                                        <li>Stay engaged</li>
                                        <li>Learn together</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                Back
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        Col 1 of 3
                    </div>
                    <div className="col-1-of-3">
                        Col 1 of 3
                    </div>
                </div>
            </section>
    )
}

export default Projects;