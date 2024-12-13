import React, { useState } from 'react';
import ContactBar from '../components/contact/ContactBar';
import ContactTitle from '../components/contact/ContactTitle';

const Contact = () => {
    const [isContactOpen, setIsContactOpen] = useState(true);
    const [isReseauxOpen, setIsReseauxOpen] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const toggleContact = () => {
        setIsContactOpen(!isContactOpen);
    };

    const toggleReseaux = () => {
        setIsReseauxOpen(!isReseauxOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setAlertMessage('');

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(),
            });

            if (response.ok) {
                setAlertMessage('Merci, votre message a bien été envoyé.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setAlertMessage('Une erreur est survenue, veuillez réessayer.');
            }
        } catch (error) {
            setAlertMessage('Une erreur est survenue, veuillez réessayer.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact">
            <div className='contact__title__mob'>_contact</div>
            <ContactBar
                isContactOpen={isContactOpen}
                isReseauxOpen={isReseauxOpen}
                toggleContact={toggleContact}
                toggleReseaux={toggleReseaux}
            />
            <div className='contact__container'>
                <ContactTitle />
                <div className='contact__container__form'>
                    {/* Formulaire de contact */}
                    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="contact" />
                        <div>
                            <label htmlFor="name">Nom :</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email :</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message :</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Envoi...' : 'Envoyer'}
                        </button>
                    </form>
                    {/* Message de confirmation */}
                    {alertMessage && <p>{alertMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default Contact;
