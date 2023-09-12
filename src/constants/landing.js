import { BsClipboard2CheckFill, BsFillPeopleFill, BsFillRecordCircleFill, BsFillSearchHeartFill } from 'react-icons/bs';
import Agricole from '../assets/landing/agricole.png';
import Artisanal from '../assets/landing/artisanal.png';
import Textile from '../assets/landing/textile.png';
import TourismeDurable from '../assets/landing/tourisme_durable.png';

export const ABOUT_US = [
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

export const VISION = [
    {
        title: 'Amélioration des conditions de vie',
        desc: 'Opportunités qui permettent aux agriculteurs, artisans et professionnels de ces chaînes de valeur de prospérer économiquement tout en améliorant leur qualité de vie globale',
    },
    {
        title: 'Développement socio-économique',
        desc: "Environnement propice à la croissance économique, à l'innovation et à la création d'emplois, tout en respectant les traditions et la culture locales",
    },
    {
        title: 'Synergie entre les maillons',
        desc: "En favorisant la coopération entre les différents acteurs des chaînes de valeur, nous contribuons à renforcer l'ensemble du système, de la production à la distribution, en passant par la transformation",
    },
    {
        title: 'Impact durable',
        desc: 'collaboration avec les partenaires locaux pour garantir que les résultats de nos efforts perdurent sur le long terme',
    },
    {
        title: 'Innovation constante',
        desc: 'Nouvelles approches, technologies et pratiques pour optimiser les chaînes de valeur que nous soutenons, les rendre plus efficaces et plus durables',
    },
];

export const VALUES = [
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

export const HOW_IT_WORKS = [
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

export const ASPECTS = [
    {
        title: 'Coûts et Revenus',
        position: {
            top: 0,
            right: '50%',
        },
    },
    {
        title: 'Contraintes et Défis',
        position: {
            top: '30%',
            right: 0,
        },
    },
    {
        title: 'Durabilité et responsabilité Sociale',
        position: {
            top: '80%',
            right: '20%',
        },
    },
    {
        title: 'Innovation et Technologie',
        position: {
            top: '80%',
            right: '80%',
        },
    },
    {
        title: 'Stratégies de Marché',
        position: {
            top: '30%',
            right: '100%',
        },
    },
];

export const MARKERS_MOROCCO = [
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
        desc: ['BELDI CHICKEN', 'CAPERS', 'APICULTURE'],
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
        desc: ['ROSE', 'DATES', 'MAPs', 'APPLES'],
        correction: -108,
        reverse: true,
        line: 200,
    },
    {
        top: '35%',
        right: '25%',
        text: 'KHOURIBGA',
        desc: ['MAPs', 'SARDI SHEEPS FARMING', 'BARLEY', 'APICULTURE'],
        correction: 10,
        reverse: true,
        line: 230,
    },
    {
        top: '45%',
        right: '50%',
        text: 'RHAMNAS',
        desc: ['BARLEY'],
        correction: 10,
        reverse: true,
        // line: 200,
    },
];

export const MARKERS_SENEGAL = [
    {
        top: '50%',
        right: '50%',
        text: 'SENEGAL',
        desc: ['BAOBAB', 'SALT', 'RICE', 'CASHEW', 'MANGO', 'VEGETABLE PRODUCTS'],
        correction: -140,
        line: 330,
    },
];

export const MARKERS_COTE_D_IVOIRE = [
    {
        top: '50%',
        right: '50%',
        text: 'IVORY COAST',
        desc: ['SHEA BUTTER'],
        correction: -52,
        line: 330,
    },
];

export const MARKERS_CAPE_VERDE = [
    {
        top: '50%',
        right: '50%',
        text: 'CAPE VERDE',
        desc: ['SALINE AGRICULTURE'],
        correction: -52,
        line: 330,
    },
];

export const MARKERS_MALAWI = [
    {
        top: '50%',
        right: '50%',
        text: 'MALAWI',
        desc: ['PIGEON PEA'],
        correction: -52,
        line: 330,
    },
];

export const TABS_COUNTRIES = ['MOROCCO', 'SENEGAL', 'IVORY COAST', 'CAPE VERDE', 'MALAWI'];
