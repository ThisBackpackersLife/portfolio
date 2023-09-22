import React from "react";
// Import SASS/CSS Styling:
import '../main.scss';

function About() {
    return (
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Meet the Engineer
                </h2>
            </div>
            <div class="row">
                    <div class="col-1-of-2">
                    <h3 class="heading-tertiary u-margin-bottom-small">Travel & Family First</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate exercitationem, asperiores dolorum nisi fuga facilis sint voluptates eos porro, reiciendis libero incidunt corrupti voluptas aliquam! Voluptates similique ut error!
                        </p>

                        <h3 class="heading-tertiary u-margin-bottom-small">Pursuing My Passion</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium et blanditiis quasi, est sequi praesentium a inventore? Ex animi error harum dolorem asperiores nemo mollitia suscipit nostrum, numquam vitae debitis?
                        </p>

                        <a href="#" class="btn-text">🤓 Let's collab! &rarr;</a>
                    </div>
                    <div class="col-1-of-2">
                        Image composition
                    </div>
                </div>
        </section>
    )
}

export default About;