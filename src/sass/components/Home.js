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
                <a href="#" className="btn btn--white btn--animated">Download Resume</a>
                <br></br>
                <br></br>
                <a href="#" className="btn btn--white btn--animated">Explore my creations</a>
            </div>
        </header>
    )
}

export default Home;