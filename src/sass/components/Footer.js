import React from "react";
// Import images here:
import logo from "../../images/NMSE.png";
import git from "../../images/github.svg";
import gmail from "../../images/gmail.svg";
import linkedin from "../../images/linkedIn.svg";

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={ logo } alt="Nicholas Logo" className="footer__logo" />
                <h4 className="footer__heading">Nicholas Martin Software Engineer</h4>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Home</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">About</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">My Stack</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Projects</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Reviews</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__personal-links">
                        <a href="#" className="footer__link--imageParent">
                            <img src={ git } alt="Nicholas' Github" className="footer__link--image"/>
                        </a>
                        <a href="#" className="footer__link--imageParent">
                            <img src={ gmail } alt="Email Nicholas" className="footer__link--image"/>
                        </a>
                        <a href="#" className="footer__link--imageParent">
                            <img src={ linkedin } alt=" Nicholas' LinkedIn" className="footer__link--image"/>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;