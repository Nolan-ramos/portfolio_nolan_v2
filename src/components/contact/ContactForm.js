import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState(''); // État pour le champ "name"

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêcher le comportement par défaut de soumission du formulaire

    const formData = new FormData(event.target); // Crée un objet FormData à partir du formulaire soumis

    // Envoi de la requête AJAX avec la méthode fetch
    fetch("/", {
      method: "POST", // Méthode de soumission
      headers: { "Content-Type": "application/x-www-form-urlencoded" }, // Encodage des données du formulaire
      body: new URLSearchParams(formData).toString(), // Encodage des données du formulaire en URL-encoded
    })
      .then(() => {
        alert("Form submitted successfully!"); // Message de succès
        // Redirection vers une page de remerciement (si nécessaire)
        // window.location.href = "/thank-you"; // Décommente pour rediriger
      })
      .catch((error) => {
        alert("Error submitting form:", error); // Message en cas d'erreur
      });
  };

  return (
    <div className="contact__container__form__content">
      <form
        name="contact" // Nom du formulaire (requis pour Netlify)
        method="POST" // Méthode POST pour envoyer les données
        data-netlify="true" // L'attribut nécessaire pour que Netlify gère le formulaire
        onSubmit={handleSubmit} // Appel de la fonction handleSubmit lors de la soumission
      >
        {/* Champ caché pour Netlify avec le nom du formulaire */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Champ de saisie avec un seul champ "name" */}
        <label>
          Your Name:
          <input
            type="text"
            name="name" // Nom du champ
            value={name} // Valeur liée à l'état React
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
