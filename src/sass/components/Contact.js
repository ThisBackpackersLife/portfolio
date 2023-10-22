import React from "react";

function Contact() {

    return(
        <section className="section-contact">
            <div className="row">
                <div className="contact">
                        <div className="contact__form">
                            <form action="#" className="form">
                                <div className="u-margin-bottom-medium">
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

                                <div class="form__group">
                                    <textarea name="message" id="message" cols="10" rows="7" placeholder="Would you like to connect? Add your message here!" class="form__input" name="message"></textarea>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;