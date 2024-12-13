import React from 'react';

const ContactForm = () => {
    return (
        <div className='contact__container__form__content'>
            <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message</label> <br />
                <textarea id="message" name="message" required></textarea>
                <input type="submit" value="Submit message" />
            </form>
        </div>
    );
};

export default ContactForm;
