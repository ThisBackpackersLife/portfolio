import React, { useState } from "react";

function Nav() {
    const [ isMenuOpen, setIsMenuOpen ] = useState( false )

    const toggleMenu = () => {
        setIsMenuOpen( !isMenuOpen )
    }

    const closeMenu = () => {
        setIsMenuOpen( false )
    }

    return (
        <div className="nav">
            <input type="checkbox" className="nav__checkbox" id="nav-toggle" checked={ isMenuOpen } onChange={ toggleMenu } />

            <label htmlFor="nav-toggle" className="nav__btn">
                <span className="nav__icon">&nbsp;</span>
            </label>

            <div className="nav__bg" onClick={ closeMenu } >&nbsp;</div>

            <div className={ `nav__nav ${ isMenuOpen ? 'open' : '' } ` }>
                <ul className="nav__list">
                    <li className="nav__item"><a href="#" className="nav__link" onClick={closeMenu}>Home</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                    <li className="nav__item"><a href="#stack" className="nav__link">My Stack</a></li>
                    <li className="nav__item"><a href="#projects" className="nav__link">Projects</a></li>
                    <li className="nav__item"><a href="#reviews" className="nav__link">Reviews</a></li>
                    <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;