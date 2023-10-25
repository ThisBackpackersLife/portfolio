import React from "react";

function Nav() {
    
    return (
        <div className="nav">
            <input type="checkbox" className="nav__checkbox" id="nav-toggle" />

            <label for="nav-toggle" className="nav__btn">Menu</label>

            <div className="nav__nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#" className="nav__link"></a>About</li>
                    <li className="nav__item"><a href="#" className="nav__link"></a>My Stack</li>
                    <li className="nav__item"><a href="#" className="nav__link"></a>Apps</li>
                    <li className="nav__item"><a href="#" className="nav__link"></a>Reviews</li>
                    <li className="nav__item"><a href="#" className="nav__link"></a>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;