import React from 'react';
import ContactBarCollapse from './ContactBarCollapse';
import { LineMdEmail } from './icons/LineMdEmail';
import { LineMdGithubLoop } from './icons/LineMdGithubLoop';
import { LineMdLinkedin } from './icons/LineMdLinkedin';
import { LineMdPhoneCallLoop } from './icons/LineMdPhoneCallLoop';

const ContactBar = ({ sectionsState, toggleSection }) => {
    const sections = [
        {
            key: 'contacts',
            title: 'contacts',
            links: [
                { icon: <LineMdEmail />, text: "nolan.ramos.01@gmail.com", url: "mailto:nolan.ramos.01@gmail.com" },
                { icon: <LineMdPhoneCallLoop />, text: "06 13 89 40 62", url: "tel:0613894062" },
            ],
        },
        {
            key: 'reseaux',
            title: 'réseaux',
            links: [
                { icon: <LineMdGithubLoop />, text: "Github", url: "https://github.com/Nolan-ramos" },
                { icon: <LineMdLinkedin />, text: "Linkedin", url: "https://www.linkedin.com/in/nolan-ramos/" },
            ],
        },
    ];

    return (
        <div className="contact__bar">
            <div className='contact__bar__collapse'>
                {sections.map((section) => (
                    <ContactBarCollapse
                        key={section.key}
                        isOpen={sectionsState[section.key]}
                        toggle={() => toggleSection(section.key)}
                        title={section.title}
                        links={section.links}
                    />
                ))}
            </div>
        </div>
    );
};

export default ContactBar;