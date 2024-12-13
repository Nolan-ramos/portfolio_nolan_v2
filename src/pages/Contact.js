import React, { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        // Utilisation de fetch pour envoyer les données sans rediriger
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => alert("Merci pour votre soumission"))
            .catch((error) => alert(error));
    };

    return (
        <div className="contact">
            <div className="contact__title__mob">_contact</div>
            <div className="contact__container">
                <h2>Contactez-nous</h2>
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="contact__container__form"
                >
                    {/* Input caché pour Netlify */}
                    <input type="hidden" name="form-name" value="contact" />

                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleChange}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <button type="submit">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
