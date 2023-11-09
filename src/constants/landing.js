import {
    BsArrowClockwise,
    BsBarChart,
    BsBoxes,
    BsClipboard2CheckFill,
    BsFillPeopleFill,
    BsFillRecordCircleFill,
    BsFillSearchHeartFill,
    BsPeople,
    BsRocket,
} from 'react-icons/bs';
import Agricole from '../assets/landing/agricole.png';
import Artisanal from '../assets/landing/artisanal.png';
import Textile from '../assets/landing/textile.png';
import TourismeDurable from '../assets/landing/tourisme_durable.png';

export const LANG = {
    FR: 'FR',
    EN: 'EN',
};

export const ABOUT_US_FR = [
    {
        title: 'Co-définition',
        desc: 'des besoins socio-économiques avec les populations et les parties prenantes',
    },
    {
        title: "Constitution d'équipes multidisciplinaires",
        desc: 'chercheurs, professionnels, agents de développement socioéconomique',
    },
    {
        title: 'Co-construction',
        desc: 'de solutions disruptives à fort impact',
    },
    {
        title: 'Pérennisation',
        desc: "de l'impact des actions et projets initiés",
    },
];

export const ABOUT_US_EN = [
    {
        title: 'Co-definition',
        desc: 'of socio-economic needs with populations and stakeholders',
    },
    {
        title: 'Building multidisciplinary teams',
        desc: 'with Researchers, Professionals, Socio-Economic Development Officers',
    },
    {
        title: 'Co-construction',
        desc: 'of high-impact and innovative solutions',
    },
    {
        title: 'Sustainability',
        desc: 'of the impact of the actions and projects launched.',
    },
];

export const VISION_FR = [
    {
        title: 'Amélioration des conditions de vie',
        desc: 'Opportunités qui permettent aux agriculteurs, artisans et professionnels de ces chaînes de valeur de prospérer économiquement tout en améliorant leur qualité de vie globale',
        icon: <BsBarChart />,
    },
    {
        title: 'Développement socio-économique',
        desc: "Environnement propice à la croissance économique, à l'innovation et à la création d'emplois, tout en respectant les traditions et la culture locales",
        icon: <BsPeople />,
    },
    {
        title: 'Synergie entre les maillons',
        desc: "En favorisant la coopération entre les différents acteurs des chaînes de valeur, nous contribuons à renforcer l'ensemble du système, de la production à la distribution, en passant par la transformation",
        icon: <BsBoxes />,
    },
    {
        title: 'Impact durable',
        desc: 'collaboration avec les partenaires locaux pour garantir que les résultats de nos efforts perdurent sur le long terme',
        icon: <BsArrowClockwise />,
    },
    {
        title: 'Innovation constante',
        desc: 'Nouvelles approches, technologies et pratiques pour optimiser les chaînes de valeur que nous soutenons, les rendre plus efficaces et plus durables',
        icon: <BsRocket />,
    },
];

export const VISION_EN = [
    {
        title: 'Improving livelihoods',
        desc: 'Opportunities that enable farmers, artisans and professionals in these value chains to prosper economically while improving their overall quality of life.',
        icon: <BsBarChart />,
    },
    {
        title: 'Socio-economic development',
        desc: 'An environment conducive to economic growth, innovation and job creation, while respecting local traditions and culture.',
        icon: <BsPeople />,
    },
    {
        title: 'Linked Synergy',
        desc: 'By fostering cooperation among the various actors in the value chains, we help strengthen the entire system, from production to processing to distribution.',
        icon: <BsBoxes />,
    },
    {
        title: 'Lasting impact',
        desc: 'Working with local partners to ensure that the results of our efforts are sustainable in the long term.',
        icon: <BsArrowClockwise />,
    },
    {
        title: 'Constant innovation',
        desc: 'New approaches, technologies and practices to optimize and make the value chains we support more efficient and sustainable.',
        icon: <BsRocket />,
    },
];

export const VALUES_FR = [
    {
        title: 'Agricole',
        desc: "Notre approche pour le développement des chaînes de valeur agricole s'articule autour de la promotion de pratiques agricoles durables, visant à préserver les ressources naturelles et à maintenir l'équilibre des écosystèmes, tout en encourageant la valorisation des produits agricoles en produits à haute valeur ajoutée",
        image: Agricole,
    },
    {
        title: 'Artisanal',
        desc: "L'artisanat est une richesse culturelle précieuse que nous voulons préserver tout en la transformant en une source de revenus durable pour les artisans. Notre approche consiste à soutenir la modernisation des processus de production tout en respectant les compétences traditionnelles",
        image: Artisanal,
    },
    {
        title: 'Tourisme durable',
        desc: "Dans le secteur du tourisme durable, notre approche repose sur la préservation de l'environnement naturel et culturel tout en offrant des expériences touristiques authentiques. Nous collaborons avec les acteurs locaux pour développer des itinéraires touristiques respectueux de l'environnement, promouvoir le tourisme communautaire",
        image: TourismeDurable,
    },
    {
        title: 'Textile',
        desc: "Nous favorisons la fabrication de textiles de haute qualité en adoptant des pratiques de production équitables et respectueuses de l'environnement, tout en garantissant une augmentation des revenus et une réduction du niveau de pénibilité au travail",
        image: Textile,
    },
];

export const VALUES_EN = [
    {
        title: 'Agriculture',
        desc: 'Our approach in developing agricultural value chains is based on the promotion of sustainable agricultural practices aimed at conserving natural resources and maintaining the balance of ecosystems, while encouraging the valorization of agricultural products into high value-added products',
        image: Agricole,
    },
    {
        title: 'Handicrafts',
        desc: 'Handicrafts are a precious cultural treasure that we want to preserve while turning them into a sustainable source of income for artisans. Our approach is to support the modernization of production processes while respecting traditional skills.',
        image: Artisanal,
    },
    {
        title: 'Sustainable tourism',
        desc: 'Our approach to sustainable tourism is based on preserving the natural and cultural environment while providing authentic tourism experiences. We work with local stakeholders to develop eco-tourism itineraries, promote community-based tourism, and develop sustainable tourism products.',
        image: TourismeDurable,
    },
    {
        title: 'Textiles',
        desc: 'We promote the production of high-quality textiles through the use of fair and environmentally friendly production practices, while ensuring an increase in income and a reduction in labor.',
        image: Textile,
    },
];

export const HOW_IT_WORKS_FR = [
    {
        title: 'Diagnostic',
        image: <BsFillSearchHeartFill />,
        desc: ['Terrain', 'Bibliographie', 'Cartographie'],
    },
    {
        title: 'Restitution',
        image: <BsFillPeopleFill />,
        desc: ['Donnés collectés', 'Contexte national et international'],
    },
    {
        title: "Plan d'implémentation",
        image: <BsFillRecordCircleFill />,
        desc: ['Capacity building', 'Assistance technique', "Appui à L'investissement"],
    },
    {
        title: 'Evaluation',
        image: <BsClipboard2CheckFill />,
        desc: ['KPIs / KVIs', 'Stratégie de sortie'],
    },
];

export const HOW_IT_WORKS_EN = [
    {
        title: 'Diagnosis',
        image: <BsFillSearchHeartFill />,
        desc: ['Field', 'Bibliography', 'Cartography'],
    },
    {
        title: 'Restitution',
        image: <BsFillPeopleFill />,
        desc: ['Data collected', 'National and international context'],
    },
    {
        title: 'Implementation plan',
        image: <BsFillRecordCircleFill />,
        desc: ['Capacity building', 'Technical assistance', 'Investment support'],
    },
    {
        title: 'Evaluation',
        image: <BsClipboard2CheckFill />,
        desc: ['KPIs / KVIs', 'Output strategy'],
    },
];

// ==================================================

export const MARKERS_MOROCCO_FR = [
    {
        top: '17%',
        right: '45%',
        text: 'EL-JADIDA',
        desc: ["ÉLEVAGE D'ESCARGOTS"],
        correction: -52,
    },
    {
        top: '27%',
        right: '53%',
        text: 'SAFI',
        line: 250,
        desc: ['POULET BELDI', 'CAPRES', 'APICULTURE'],
        correction: -90,
    },
    {
        top: '57%',
        right: '76%',
        text: 'GUELMIM',
        desc: ['FILIERE CAMELINE'],
        correction: -52,
        line: 170,
    },
    {
        top: '80%',
        right: '92%',
        text: 'DAKHLA',
        desc: ['FILIERE CAMELINE'],
        correction: -52,
        line: 170,
    },
    {
        top: '25%',
        right: '15%',
        text: 'DARAA TAFILALT',
        desc: ['ROSE', 'DATTES', 'PAMS', 'POMMES'],
        correction: -108,
        reverse: true,
        line: 200,
    },
    {
        top: '35%',
        right: '25%',
        text: 'KHOURIBGA',
        desc: ['ÉLEVAGE DE MOUTONS SARDI', 'PAMS', 'ORGE', 'APICULTURE'],
        correction: 10,
        reverse: true,
        line: 200,
    },
    {
        top: '45%',
        right: '50%',
        text: 'RHAMNA',
        desc: ['ORGE'],
        correction: 10,
        reverse: true,
        line: 100,
    },
];

export const MARKERS_SENEGAL_FR = [
    {
        top: '50%',
        right: '50%',
        text: 'SENEGAL',
        desc: ['BAOBAB', 'SEL', 'RIZ', 'ANACARDIER', 'MANGUE', 'PRODUITS VÉGÉTAUX'],
        correction: -140,
        line: 330,
    },
];

export const MARKERS_COTE_D_IVOIRE_FR = [
    {
        top: '50%',
        right: '50%',
        text: 'IVORY COAST',
        desc: ['BEURRE DE KARITÉ'],
        correction: -52,
        line: 330,
    },
];

export const MARKERS_CAPE_VERDE_FR = [
    {
        top: '50%',
        right: '50%',
        text: 'CAPE VERDE',
        desc: ['AGRICULTURE SALINE'],
        correction: -52,
        line: 330,
    },
];

export const MARKERS_MALAWI_FR = [
    {
        top: '50%',
        right: '50%',
        text: 'MALAWI',
        desc: ["POIS D'ANGOLE"],
        correction: -52,
        line: 330,
    },
];

export const TABS_COUNTRIES_FR = ['MAROC', 'SÉNÉGAL', "CÔTE D'IVOIRE", 'CAP-VERT', 'MALAWI'];

// =========================

export const MARKERS_MOROCCO_EN = [
    {
        top: '17%',
        right: '45%',
        text: 'EL-JADIDA',
        desc: ['SNAILS FARMING'],
        correction: -52,
    },
    {
        top: '27%',
        right: '53%',
        text: 'SAFI',
        line: 250,
        desc: ['BELDI CHICKEN', 'CAPRES', 'APICULTURE'],
        correction: -90,
    },
    {
        top: '57%',
        right: '76%',
        text: 'GUELMIM',
        desc: ['CAMEL BASED PRODUCTS'],
        correction: -52,
        line: 170,
    },
    {
        top: '80%',
        right: '92%',
        text: 'DAKHLA',
        desc: ['CAMEL BASED PRODUCTS'],
        correction: -52,
        line: 170,
    },
    {
        top: '25%',
        right: '15%',
        text: 'DARAA TAFILALT',
        desc: ['ROSE', 'DATES', 'AROMATIC AND MEDICINAL PLANTS', 'APPLES'],
        correction: -108,
        reverse: true,
        line: 260,
    },
    {
        top: '35%',
        right: '25%',
        text: 'KHOURIBGA',
        desc: ['AROMATIC AND MEDICINAL PLANTS', 'SARDI SHEEPS FARMING', 'BARLEY', 'APICULTURE'],
        correction: 10,
        reverse: true,
        line: 280,
    },
    {
        top: '45%',
        right: '50%',
        text: 'RHAMNA',
        desc: ['BARLEY'],
        correction: 10,
        reverse: true,
    },
];

export const MARKERS_SENEGAL_EN = [
    {
        top: '50%',
        right: '50%',
        text: 'SENEGAL',
        desc: ['BAOBAB', 'SALT', 'RICE', 'CASHEW', 'MANGO', 'VEGETABLE PRODUCTS'],
        correction: -140,
        line: 330,
    },
];

export const MARKERS_COTE_D_IVOIRE_EN = [
    {
        top: '50%',
        right: '50%',
        text: 'IVORY COAST',
        desc: ['SHEA BUTTER'],
        correction: -52,
        line: 330,
    },
];

export const MARKERS_CAPE_VERDE_EN = [
    {
        top: '50%',
        right: '50%',
        text: 'CAPE VERDE',
        desc: ['SALINE AGRICULTURE'],
        correction: -52,
        line: 330,
    },
];

export const MARKERS_MALAWI_EN = [
    {
        top: '50%',
        right: '50%',
        text: 'MALAWI',
        desc: ['PIGEON PEA'],
        correction: -52,
        line: 330,
    },
];

export const TABS_COUNTRIES_EN = ['MOROCCO', 'SENEGAL', 'IVORY COAST', 'CAPE VERDE', 'MALAWI'];
