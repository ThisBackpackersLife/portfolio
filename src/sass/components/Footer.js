import React from "react";
// Import images here:
import logo from "../../images/NMSE.png";

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
                    </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;