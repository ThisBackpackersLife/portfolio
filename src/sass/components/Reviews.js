import React from "react";
// Import pictures here
import nathImg from "../../images/Nath.jpg";
import sterlingImg from "../../images/Sterling.jpeg";
import macoImg from "../../images/Maco.jpg";
import waveMp4 from "../../images/Waves.mp4";
import waveWebm from "../../images/Waves.webm"

function Reviews() {

    return(
        <section className="section-reviews" id="section-reviews">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop playsInline>
                    <source src={ waveMp4 } type="video/mp4" />
                    <source src={ waveWebm } type="video/webm" />
                    Your browser is not supported!
                </video>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="feature-heading u-center-text u-margin-top-big">Reviews</h2>
            </div>

            <div className="row">
                <div className="review">
                    <figure className="review__shape">
                        <img src={ sterlingImg } alt="Sterling" className="review__img" />
                        <figcaption className="review__caption">Sterling Barton</figcaption>
                    </figure>
                    <div className="review__text">
                        <h3 className="heading-tertiary-2 u-margin-bottom-small">Sterling Barton: Software Engineer 👩‍💻📱🌐</h3>
                        <p className="paragraph">
                            Recently I had the opportunity to work with Nicholas Martin during a hackathon. What truly stood out for me was Nicholas's exceptional ability to dive into the nitty-gritty of our project. Nicholas demonstrated an impressive knack for getting the back-end of our project up and running within just a couple of days. His technical knowledge and problem-solving abilities were extraordinary, demonstrating his deep understanding of back-end development. But Nicholas's talents extended beyond his coding capabilities. He consistently communicated with the team about his progress and provided regular updates on his work. His significant communication not only kept everyone in the loop but also fostered a sense of collaboration and unity among the team members.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="review">
                    <figure className="review__shape">
                        <img src={ nathImg } alt="Nathalia" className="review__img" />
                        <figcaption className="review__caption">Nathalia Andrade</figcaption>
                    </figure>
                    <div className="review__text">
                        <h3 className="heading-tertiary-2 u-margin-bottom-small">Nathalia Andrade: UX/UI Designer 🎨✨🖥️</h3>
                        <p className="paragraph">
                            Working with Nicholas was an experience that redefined collaboration and made every challenge easier. As a UX/UI Designer, I've had the privilege of working with many developers, and Nicholas stands out for all the right reasons that go beyond his technical skills. Nicholas was not just our Backend Engineer; he had this cheerful spirit that kept us motivated and inspired throughout the Hackathon, and every interaction with him left a smile on my face. No matter how tough the challenge, Nicholas approached it with a sense of fun and enthusiasm that was contagious. Communication was never an issue either, he had an exceptional ability to convey ideas in a way that made us feel at ease. He was always present, easy to talk to, and ready to lend a helping hand. Whether it was resolving a coding issue or brainstorming ideas for our project, he was there. It was not just a pleasure but an absolute honor to work with him. I can't wait for more opportunities to collaborate and achieve greater heights. 🚀✨
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="review">
                    <figure className="review__shape">
                        <img src={ macoImg } alt="Maco" className="review__img" />
                        <figcaption className="review__caption">Macolister Bispo</figcaption>
                    </figure>
                    <div className="review__text">
                        <h3 className="heading-tertiary-2 u-margin-bottom-small">Macolister Bispo: Full Stack Developer 🧑‍💻📱💾</h3>
                        <p className="paragraph">
                            Collaborating with Nicholas, a Python and Flask expert, was pivotal for our project's backend success. His expertise streamlined our database, fixed errors in the initial setup, and implemented seamless user login features. Nicholas's unwavering dedication to brainstorming fresh ideas, coupled with his openness to feedback, elevated his already exceptional work. He went above and beyond, not just meeting but surpassing requirements. His efforts didn't just ensure MVP criteria; they secured us the Most Innovative award. Nicholas excels not only in coding but also in communication and meeting deadlines. His contributions, from insightful discussions to implementing enhancements, were instrumental. Any team fortunate enough to have Nicholas onboard will benefit immensely from his coding prowess, communication skills, and commitment to innovation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;