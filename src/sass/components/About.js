import React from "react";
// Import Images:
import chichenImg from "../../images/ChichenItza.jpg";
import tikalImg from "../../images/Tikal.jpg";
import cocoroImg1 from "../../images/Cocoro2.jpg";
import sanCrisImage from "../../images/SanCristobal.jpg";

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
            <div className="row">
                    <div className="col-1-of-2">
                    <h3 className="heading-tertiary-2 u-margin-bottom-small">Travel & Family First</h3>
                        <p className="paragraph">
                            Family comes first, anchoring my life. Travel fuels my curiosity, offering cultural enrichment. Balancing these passions shapes my legacy, guiding both personal and professional pursuits. Prioritizing family bonds and cultural exploration defines my values, driving impactful contributions in life and software engineering. While I currently reside in High Ridge, Missouri, my heart resonates with Bozeman, Montana—the place I yearn to call home again. 
                        </p>

                        <h3 className="heading-tertiary-2 u-margin-bottom-small">Pursuing My Passion</h3>
                        <p className="paragraph">
                            Software engineering isn't just a career—it's my calling. With a strong technical foundation encompassing Python, React, JavaScript, and more, I bring a unique blend of expertise and passion to every project. Transitioning from a beloved local bartender, I've always thrived on crafting experiences. Now, I fuse code with creativity, transforming ideas into tangible digital realities. My diverse background, from backpacking through Latin America to serving in the US Navy, shapes my holistic perspective in problem-solving and innovation. Coding isn't just a skill; it's my passion—a journey of continuous growth. As a developer, I'm here to create, innovate, and bring visions to life through the power of code.
                        </p>

                        <a href="#section-contact" className="btn-text">🤓 Let's collab! &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={ chichenImg } alt="Chichen Itza, Mexico" className="composition__photo composition__photo--p1" />
                            <img src={ cocoroImg1 } alt="Valle del Cocoro, Colombia" className="composition__photo composition__photo--p2" />
                            <img src={ sanCrisImage } alt="San Cristobal de las Casas, Mexico" className="composition__photo composition__photo--p3" />
                            <img src={ tikalImg } alt="Tikal, Guatemala" className="composition__photo composition__photo--p4" />
                        </div> 
                    </div>
                </div>
        </section>
    )
}

export default About;