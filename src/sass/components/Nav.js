import React from "react";

function Nav() {
    
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />

            <label for="nav-toggle" className="navigation__btn">Menu</label>

            <div className="navigation__nav">
                <ul className="navigation__list"></ul>
            </div>
        </div>
    )
}

export default Nav;