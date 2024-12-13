import React, { useState } from 'react';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsSubmitting(true);

        const formData = new FormData(event.target);

        fetch('/', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    setIsSubmitted(true); 
                } else {
                    console.log('Something went wrong. Please try again.');
                }
            })
            .catch((error) => {
                console.log('An error occurred. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contact__container__form__content">
            {!isSubmitted ? (
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <label htmlFor="name">Name</label> <br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                    <label htmlFor="email">Email</label> <br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                    <label htmlFor="message">Message</label> <br />
                    <textarea
                        id="message"
                        name="message"
                        required
                    ></textarea>
                    <input
                        type="submit"
                        value={isSubmitting ? 'Submitting...' : 'Submit message'}
                        disabled={isSubmitting}
                    />
                </form>
            ) : (
                <p className="form-success-message">Thank you for your submission!</p>
            )}
        </div>
    );
};

export default ContactForm;
