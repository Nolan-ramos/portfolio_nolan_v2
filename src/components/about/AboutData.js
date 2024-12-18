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
            text: "Je suis un développeur passionné par les technologies modernes et l'innovation."
        },
        {
            key: 'interets',
            categorie: 'Intérêts',
            icon: <IconParkOutlineEntertainment />,
            text: "Je m'intéresse à l'IA, au développement web et à l'open source."
        },
    ],
    expérience: [
        {
            key: 'beyable',
            categorie: 'Beyable',
            icon: <PhSuitcaseSimple />,
            text: "J'ai travaillé chez Beyable en tant que développeur front-end."
        },
    ],
    formations: [
        {
            key: 'hetic',
            categorie: 'Hetic',
            icon: <MaterialSymbolsSchoolOutline />,
            text: "Je suis diplômé de l'école Hetic en développement web."
        },
    ],
    compétences: [
        {
            key: 'skills',
            categorie: 'Skills',
            icon: <MaterialSymbolsCodeBlocks />,
            text: "Voici la liste de mes skills"
        },
        {
            key: 'softs_skills',
            categorie: 'Softs & Skills',
            icon: <FluentBrainCircuit24Filled />,
            text: "Voici la liste de mes softs & skills"
        },
    ],
};

export default AboutData;
