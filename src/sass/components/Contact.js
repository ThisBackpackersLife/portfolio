import React from "react";

function Contact() {

    return(
        <section className="section-contact">
            <div className="row">
                <div className="contact">
                        <div className="contact__form">
                            <form action="#" className="form">
                                <div className="u-center-text u-margin-bottom-big">
                                    <h2 className="heading-secondary">
                                        Contact Nicholas
                                    </h2>
                                </div>

                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Full Name" id="name" required />
                                    <label for="name" className="form__label">Full Name</label>
                                </div>

                                <div class="form__group">
                                    <input type="email" className="form__input" placeholder="Email Address" id="email" required /> 
                                    <label for="email" className="form__label">Email Address</label>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;