import React from "react";
// Import images here:
import logo from "../../images/NMSE.png";
// Import SASS/CSS Styling:
import '../main.scss';

function Home() {

    return (
        <header className="header">
            <div className="header__logo-box">
                <img src={ logo } alt="Nicholas Logo" className="header__logo" />
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                <br></br>
                    <span className="heading-primary--main">Nicholas Martin</span>
                    <br></br>
                    <span className="heading-primary--sub">Software Engineer</span>
                    <span className="heading-primary--sub">&</span>
                    <span className="heading-primary--sub">Website Developer</span>
                </h1>
                <a href="#section-projects" className="btn-1 btn--white btn--animated u-margin-top-sm">Explore creations</a>
                <br></br>
                <br></br>
                <a href="#" className="btn-1 btn--white btn--animated u-margin-bottom-small">Download resume</a>
            </div>
        </header>
    )
}

export default Home;