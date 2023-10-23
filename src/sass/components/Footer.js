import React from "react";
// Import images here:
import logo from "../../images/NMSE.png";

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={ logo } alt="Nicholas Logo" class="footer__logo" />
            </div>
        </footer>
    )
}

export default Footer;