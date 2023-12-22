import React from "react";
// Import pictures here
import nathImg from "../../images/Nath.jpg";
import sterlingImg from "../../images/Sterling.jpeg";
import macoImg from "../../images/Maco.jpg";
import waveMp4 from "../../images/Waves.mp4";
import waveWebm from "../../images/Waves.webm"

function Reviews() {

    return(
        <section className="section-reviews">
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
                        I had the privilege of collaborating with Nicholas, a true expert in Python and Flask. His invaluable contributions in setting up our backend were instrumental in our project's success.

                        Although I couldn't attend the initial kickoff, Nicholas was quick to bridge the gap and went above and beyond to accommodate my schedule. We consistently found time for insightful discussions following our standup meetings, where we exchanged ideas and diligently charted our course of action. Nicholas exhibited unwavering dedication to brainstorming and implementing fresh ideas, always welcoming constructive feedback, which he used to enhance his already exceptional work.

                        hen I initially attempted to establish our models and Python backend to provide a starting point for the team, Nicholas effortlessly identified and rectified my minor errors. He also streamlined our database structure to align perfectly with the hackathon's requirements. Nicholas's work on the database was nothing short of amazing, and he even incorporated validation methods and user login features seamlessly.

                        In the midst of a demanding project schedule, where we had to create a minimum viable product (MVP) in just two weeks, Nicholas's dedication and focus were crucial. He didn't just meet our requirements; he went above and beyond. As a result, our project not only met the MVP criteria but also won the Most Innovative award.

I wholeheartedly believe that any team fortunate enough to have Nicholas onboard would benefit immensely from his coding prowess, his excellent interpersonal and communication skills, and his unyielding commitment to meeting deadlines, accepting criticism, and continuously propelling innovative ideas forward.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;