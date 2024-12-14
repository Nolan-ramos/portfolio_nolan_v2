import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactCode from './ContactCode';

const ContactFormCode = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (data) => {
        setFormData(data);
    };

    return (
        <div className='contact__container__form__content'>
            <ContactForm onInputChange={handleInputChange} />
            <ContactCode formData={formData} />
        </div>
    );
};

export default ContactFormCode;