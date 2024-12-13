// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState(''); // État pour le champ "name"

  const handleSubmit = (event) => {
    event.preventDefault();
    // Gestion de la soumission si nécessaire
    console.log('Form submitted with name:', name);
  };

  return (
    <div className="contact__container__form__content">
      <form
        name="contact" // Nom du formulaire
        method="POST" // Méthode de soumission
        data-netlify="true" // Attribut nécessaire pour que Netlify gère le formulaire
        onSubmit={handleSubmit} // Appel de la fonction handleSubmit lors de la soumission
      >
        {/* Champ caché pour Netlify avec le nom du formulaire */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Champ de saisie avec un seul champ de nom */}
        <label>
          Your Name:
          <input
            type="text"
            name="name" // Nom du champ, correspond à l'attribut name dans le formulaire Netlify
            value={name} // Valeur de l'input liée à l'état React
            onChange={(e) => setName(e.target.value)} // Mise à jour de l'état lors de la saisie
            required // Le champ est obligatoire
          />
        </label>

        {/* Bouton de soumission */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
