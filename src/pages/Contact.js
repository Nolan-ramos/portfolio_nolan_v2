import React, { useState } from 'react';
import ContactBar from '../components/contact/ContactBar';
import ContactCode from '../components/contact/ContactCode';
import ContactForm from '../components/contact/ContactForm';
import ContactTitle from '../components/contact/ContactTitle';

const Contact = () => {
    const [isContactOpen, setIsContactOpen] = useState(true);
    const [isReseauxOpen, setIsReseauxOpen] = useState(true);

    const toggleContact = () => {
        setIsContactOpen(!isContactOpen);
    };

    const toggleReseaux = () => {
        setIsReseauxOpen(!isReseauxOpen);
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
                    <div className='contact__container__form__content'>
                        <ContactForm />
                        <ContactCode />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
