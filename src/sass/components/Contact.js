import React from "react";

function Contact() {

    return(
        <section className="section-contact">
            <div className="row">
                <div className="contact">
                        <div className="contact__form">
                            <form action="#" className="form">
                                <div className="u-margin-bottom-small">
                                    <h2 className="heading-secondary">
                                        Contact Nicholas
                                    </h2>
                                </div>

                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Full Name" id="name" required />
                                    <label htmlFor="name" className="form__label">Full Name</label>
                                </div>

                                <div className="form__group">
                                    <input type="email" className="form__input" placeholder="Email Address" id="email" required /> 
                                    <label htmlFor="email" className="form__label">Email Address</label>
                                </div>

                                <div className="form__group">
                                    <textarea className="form__input" cols="10" rows="7" placeholder="Would you like to connect? Add your message here!" id="message" name="message" />
                                </div>

                                <div className="form__group">
                                    <div className="form__radio-group u-margin-bottom-small">
                                        <input type="radio" className="form__radio-input" id="opp" name="reason" />
                                        <label htmlFor="opp" className="form__radio-label">
                                            <span className="form__radio-btn"></span>
                                            Opportunity
                                        </label>
                                    </div>

                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="inq" name="reason" />
                                        <label htmlFor="inq" className="form__radio-label">
                                            <span className="form__radio-btn"></span>
                                            Inquiry                                       
                                        </label>
                                    </div>
                                </div>

                                <div className="form__group">
                                    <button className="btn btn--orange u-margin-bottom-small u-margin-left-md">Submit &rarr;</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;