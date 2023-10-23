import React from "react";
// Import images here:
import logo from "../../images/NMSE.png";
import git from "../../images/github-mark.png";
import youtube from "../../images/youtube-black.png";

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={ logo } alt="Nicholas Logo" className="footer__logo" />
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
                    <p className="footer__copyright">
                        <a href="#" className="footer__link">
                            <img src={ git } alt="Nicholas' Github" className="footer__link--image"/>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;