import { FluentBrainCircuit24Filled } from './icons/FluentBrainCircuit24Filled';
import { IconParkOutlineEntertainment } from './icons/IconParkOutlineEntertainment';
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
                "Âgé de 23 ans, diplômé d’un Bachelor en développement web et enrichi par une expérience en alternance, je recherche un CDI en tant que développeur front-end."
            ],
            icon: <MaterialSymbolsCoPresentOutlineSharp />

        },
        {
            id: 2,
            section: 'Présentation',
            key: 'interets',
            categorie: 'Intérêts',
            title: "Intérêts",
            text: "Page en cours de développement",
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
            text: "Page en cours de développement",
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
            text: "Page en cours de développement",
            icon: <MaterialSymbolsSchoolOutline />,
        },
    ],
    compétences: [
        {
            id: 5,
            section: 'Compétences',
            key: 'skills',
            categorie: 'Skills',
            title: "Skills",
            text: "Page en cours de développement",
            icon: <MaterialSymbolsCodeBlocks />,

        },
        {
            id: 6,
            section: 'Compétences',
            key: 'softs_skills',
            categorie: 'Softs & Skills',
            title: "Softs & Skills",
            text: "Page en cours de développement",
            icon: <FluentBrainCircuit24Filled />,

        },
    ],
};

export default AboutData;
