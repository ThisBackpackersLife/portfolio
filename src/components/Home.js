import React from "react";
import logo from "../images/NMSE.png";
// Import CSS
import './Home.css';

function Home() {

    return (
        <header className="header">
            <div className="logo-box">
                <img src={ logo } alt="Logo" className="logo" />
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Nicholas Martin</span>
                    <span className="heading-primary-sub">Software Engineer</span>
                    <span className="heading-secondary-sub">&</span>
                    <span className="heading-secondary-sub">Website Developer</span>
                </h1>
                <a href="#" className="btn btn-white btn-animated">Explore my creations</a>
                <a href="#" className="btn btn-white btn-animated">Download my resume</a>
            </div>
        </header>
    )
}

export default Home;