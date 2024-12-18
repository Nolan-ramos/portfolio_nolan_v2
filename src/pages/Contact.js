import React, { useState } from 'react';
import ContactBar from '../components/contact/ContactBar';
import ContactFormCode from '../components/contact/ContactFormCode';
import ContactTitle from '../components/contact/ContactTitle';

const Contact = () => {
    const [sectionsState, setSectionsState] = useState({
        contacts: true,
        reseaux: true,
    });

    const toggleSection = (section) => {
        setSectionsState((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div className="contact">
            <div className='contact__title__mob'>_contact</div>
            <ContactBar
                sectionsState={sectionsState}
                toggleSection={toggleSection}
            />
            <div className='contact__container'>
                <ContactTitle />
                <div className='contact__container__form'>
                    <ContactFormCode />
                </div>
            </div>
        </div>
    );
};

export default Contact;