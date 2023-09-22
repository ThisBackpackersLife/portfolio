import React from "react";
// Import SASS/CSS Styling:
import '../main.scss';

function About() {
    return (
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-8">
                <h2 className="heading-secondary">
                    Meet the Engineer
                </h2>
            </div>
            <div class="row">
                    <div class="col-1-of-2">
                        Text Content
                    </div>
                    <div class="col-1-of-2">
                        Image composition
                    </div>
                </div>
        </section>
    )
}

export default About;