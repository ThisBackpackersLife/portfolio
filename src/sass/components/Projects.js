import React from "react";
// Import Logo's here:
import git from "../../images/github-mark.png"
import youtube from "../../images/youtube-black.png"
import explore from "../../images/explore.jpg"
import culinary from "../../images/culinary.jpg"
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
                                        <li>With disabilities</li>
                                        <li>Chat with our AI chatbot</li>
                                        <li>Stay engaged</li>
                                        <li>Learn together</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                        <div className="card__box">
                                            <a href="#" className="btn btn--white">
                                                <img src={ git } alt="Github" className="card__picture card__picture--back"/>
                                            </a>
                                            <br/>
                                            <a href="#" className="btn btn--white">
                                                <img src={ youtube } alt="Youtube" className="card__picture card__picture--back"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading--span card__heading--span--2">ExploreMate</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Plan all your Travels</li>
                                        <li>Select destinations around the world</li>
                                        <li>Keep itineraries in one place</li>
                                        <li>Plan activities</li>
                                        <li>EXPLORE!</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                        <div className="card__box">
                                            <a href="#" className="btn btn--white">
                                                <img src={ git } alt="Github" className="card__picture card__picture--back"/>
                                            </a>
                                            <br/>
                                            <a href="#" className="btn btn--white">
                                                <img src={ youtube } alt="Youtube" className="card__picture card__picture--back"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading--span card__heading--span--3">Culinary Critic</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Rate Restaurants</li>
                                        <li>Save places that sound good</li>
                                        <li>Search restaurant reviews</li>
                                        <li>Search based on...</li>
                                        <li>Keyword, Cuisine, Price, Range, & Dietary Restrictions</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                        <div className="card__box">
                                            <a href="#" className="btn btn--white">
                                                <img src={ git } alt="Github" className="card__picture card__picture--back"/>
                                            </a>
                                            <br/>
                                            <a href="#" className="btn btn--white">
                                                <img src={ youtube } alt="Youtube" className="card__picture card__picture--back"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Projects;