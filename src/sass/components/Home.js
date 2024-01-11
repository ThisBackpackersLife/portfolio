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
                    <span className="heading-primary--sub">Software_Engineer</span>
                    <span className="heading-primary--sub">Application_Developer</span>
                </h1>
                <a href="#projects" className="btn-1 btn--white btn--animated u-margin-top-sm">Explore creations</a>
                <br></br>
                <br></br>
                <a href="/images/Nicholas_Martin_Resume.pdf" className="btn-1 btn--white btn--animated u-margin-bottom-small" download
                    >Download resum&eacute;
                </a>
            </div>
        </header>
    )
}

export default Home;