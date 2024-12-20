import { FluentBrainCircuit24Filled } from './icons/FluentBrainCircuit24Filled';
import { IconParkOutlineEntertainment } from './icons/IconParkOutlineEntertainment';
import { MaterialSymbolsAppRegistration } from './icons/MaterialSymbolsAppRegistration';
import { MaterialSymbolsCodeBlocks } from './icons/MaterialSymbolsCodeBlocks';
import { MaterialSymbolsCoPresentOutlineSharp } from './icons/MaterialSymbolsCoPresentOutlineSharp';
import { MaterialSymbolsSchoolOutline } from './icons/MaterialSymbolsSchoolOutline';
import { PhSuitcaseSimple } from './icons/PhSuitcaseSimple';

const AboutData = {
    présentation: [
        {
            id: 1,
            section: 'Présentation',
            key: 'profil',
            categorie: 'Profil',
            title: "Profil",
            text: [
                "Je m'appelle Nolan Ramos, j'ai 23 ans et je suis passionné par le développement front-end.", 
                "Créer des interfaces élégantes, intuitives et fonctionnelles, c’est une passion pour moi.", 
                "J'adore transformer des idées en expériences visuelles captivantes, où chaque détail compte."
            ],
            icon: <MaterialSymbolsCoPresentOutlineSharp />

        },
        {
            id: 2,
            section: 'Présentation',
            key: 'interets',
            categorie: 'Intérêts',
            title: "Intérêts",
            text: ["Cinéma","Voyages","Musique","Cuisine","Mode","Jeux vidéos"],
            icon: <IconParkOutlineEntertainment />

        },
    ],
    expérience: [
        {
            id: 3,
            section: 'Expérience',
            key: 'beyable',
            categorie: 'Beyable',
            title: "Beyable",
            text: ["Page en cours de développement"],
            icon: <PhSuitcaseSimple />
        },
    ],
    formations: [
        {
            id: 4,
            section: 'Formations',
            key: 'hetic',
            categorie: 'Hetic',
            title: "Hetic",
            text: ["Page en cours de développement"],
            icon: <MaterialSymbolsSchoolOutline />,
        },
    ],
    compétences: [
        {
            id: 5,
            section: 'Compétences',
            key: 'languages',
            categorie: 'Languages',
            title: "Languages",
            text: ["Vue.js","React Native","React.js","Node.js","JavaScript","Express.js","CSS","HTML","SQL","PHP","Python"],
            icon: <MaterialSymbolsCodeBlocks />,

        },
        {
            id: 6,
            section: 'Compétences',
            key: 'softs_skills',
            categorie: 'Softs & Skills',
            title: "Softs & Skills",
            text: ["Créatif","Organisé","Polyvalent","Gestion du temps","Aime apprendre","Esprit d’analyse","Communication","Patience","Adaptabilité","Travailler en équipe"],
            icon: <FluentBrainCircuit24Filled />,

        },
        {
            id: 7,
            section: 'Compétences',
            key: 'outils',
            categorie: 'Outils',
            title: "Outils",
            text: ["Figma","Adobe","Github","Visual Studio"],
            icon: <MaterialSymbolsAppRegistration />,

        },
    ],
};

export default AboutData;
