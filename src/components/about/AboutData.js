import { FluentBrainCircuit24Filled } from './icons/FluentBrainCircuit24Filled';
import { IconParkOutlineEntertainment } from './icons/IconParkOutlineEntertainment';
import { MaterialSymbolsCodeBlocks } from './icons/MaterialSymbolsCodeBlocks';
import { MaterialSymbolsCoPresentOutlineSharp } from './icons/MaterialSymbolsCoPresentOutlineSharp';
import { MaterialSymbolsSchoolOutline } from './icons/MaterialSymbolsSchoolOutline';
import { PhSuitcaseSimple } from './icons/PhSuitcaseSimple';

const AboutData = {
    présentation: [
        {
            key: 'profil',
            categorie: 'Profil',
            icon: <MaterialSymbolsCoPresentOutlineSharp />,
            text: "Page en cours de développement"
        },
        {
            key: 'interets',
            categorie: 'Intérêts',
            icon: <IconParkOutlineEntertainment />,
            text: "Page en cours de développement"
        },
    ],
    expérience: [
        {
            key: 'beyable',
            categorie: 'Beyable',
            icon: <PhSuitcaseSimple />,
            text: "Page en cours de développement"
        },
    ],
    formations: [
        {
            key: 'hetic',
            categorie: 'Hetic',
            icon: <MaterialSymbolsSchoolOutline />,
            text: "Page en cours de développement"
        },
    ],
    compétences: [
        {
            key: 'skills',
            categorie: 'Skills',
            icon: <MaterialSymbolsCodeBlocks />,
            text: "Page en cours de développement"
        },
        {
            key: 'softs_skills',
            categorie: 'Softs & Skills',
            icon: <FluentBrainCircuit24Filled />,
            text: "Page en cours de développement"
        },
    ],
};

export default AboutData;
