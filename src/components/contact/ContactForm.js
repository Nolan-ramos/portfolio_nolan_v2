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
                    console.log("L'envoie du formulaire a rencontré un problème");
                }
            })
            .catch((error) => {
                console.log("L'envoie du formulaire a rencontré un problème");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contact__container__form__content__container">
            {!isSubmitted ? (
                <form className="contact__container__form__content__container__form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className='contact__container__form__content__container__form__field mouse-hover'>
                        <label htmlFor="name">_nom_prenom:</label>
                        <input type="text" id="name" name="name" placeholder="" required/>
                    </div>
                    <div className='contact__container__form__content__container__form__field mouse-hover'>
                        <label htmlFor="email">_email:</label>
                        <input type="email" id="email" name="email" placeholder="" required/>
                    </div>
                    <div className='contact__container__form__content__container__form__field mouse-hover'>
                    <label htmlFor="message">_message:</label>
                        <textarea id="message" name="message" placeholder="" required></textarea>
                    </div>
                    <input className='text-hover mouse-hover' type="submit" value={isSubmitting ? 'Envoyer...' : 'Envoyer'} disabled={isSubmitting}/>
                </form>
            ) : (
                <p className="form-success-message">Thank you for your submission!</p>
            )}
        </div>
    );
};

export default ContactForm;
