import React, { useState } from 'react';

const ContactForm = () => {
    // State pour gérer les champs du formulaire et le message de succès
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Gestionnaire d'événements pour la modification des champs du formulaire
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Fonction pour soumettre le formulaire
    const handleSubmit = async (event) => {
        event.preventDefault();  // Empêche le rechargement de la page

        setIsSubmitting(true);

        // Crée un objet FormData à partir du formulaire
        const form = event.target;
        const formDataObj = new FormData(form);

        try {
            // Envoi des données à Netlify
            await fetch('/', {
                method: 'POST',
                body: formDataObj,
            });

            // Réinitialisation du formulaire après soumission réussie
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            setIsFormSubmitted(true);
        } catch (error) {
            console.error("Erreur lors de la soumission du formulaire :", error);
            setIsFormSubmitted(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Affichage du message de succès ou du formulaire
    return (
        <div className='contact__container__form__content'>
            {isFormSubmitted ? (
                <div className="success-message">
                    <h3>Votre message a bien été envoyé !</h3>
                </div>
            ) : (
                <form
                    name="contact" // Nom du formulaire pour Netlify
                    method="POST"
                    action="/"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <div>
                        <label>
                            Votre nom:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Votre email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>

                    <div>
                        <label>
                            Message:
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>

                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
