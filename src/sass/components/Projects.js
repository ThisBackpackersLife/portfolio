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
                                <div className="card__heading">
                                    Heading
                                </div>
                                <div className="card__details">
                                    Details
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