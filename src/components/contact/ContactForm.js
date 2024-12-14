import React, { useState } from 'react';

const ContactForm = ({ onInputChange }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        onInputChange(updatedData); // Remonter les données au parent
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formDataToSend = new FormData(event.target);

        fetch('/', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formDataToSend,
        })
            .then((response) => {
                if (response.ok) {
                    setIsSubmitted(true); // Mettre à jour l'état local
                } else {
                    console.log("L'envoi du formulaire a rencontré un problème");
                }
            })
            .catch(() => {
                console.log("L'envoi du formulaire a rencontré un problème");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contact__container__form__content__container">
            {!isSubmitted ? (
                <form
                    className="contact__container__form__content__container__form"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className='contact__container__form__content__container__form__field mouse-hover'>
                        <label htmlFor="name">_nom_prenom:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='contact__container__form__content__container__form__field mouse-hover'>
                        <label htmlFor="email">_email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='contact__container__form__content__container__form__field mouse-hover'>
                        <label htmlFor="message">_message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <input
                        className='text-hover mouse-hover'
                        type="submit"
                        value={isSubmitting ? 'Envoyer...' : 'Envoyer'}
                        disabled={isSubmitting}
                    />
                </form>
            ) : (
                <p className="form-success-message">Merci pour votre soumission !</p>
            )}
        </div>
    );
};

export default ContactForm;