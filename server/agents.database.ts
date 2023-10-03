import { Agent } from "~/app/agents/types";

const mario: Agent = {
  id: 92955,
  birthdate: "10 mars 1981",
  name: "Mario Mario",
  codeName: "Agent Mario",
  placeOfBirth: "Brooklyn, New York, États-Unis",
  appearance: {
    Taille: "155 cm",
    Poids: "89 kg",
    Yeux: "Bleus",
    Cheveux: "Noirs",
  },
  abilities: [
    "Maîtrise avancée des techniques de saut et de parkour",
    "Expérience en plomberie et en réparation de systèmes complexes",
    "Compétences en combat au corps à corps et en utilisation d'objets",
  ],
  mission:
    "Sauvetage et protection de la Princesse Peach du Royaume Champignon contre les menaces internes et externes",
  missionsHistory: [
    "Infiltration du château de Bowser et sauvetage réussi de la Princesse Peach à plusieurs reprises",
    "Exploration de mondes fantastiques pour collecter des objets précieux et vaincre les ennemis",
  ],
  status: "Agent actif de la CIA, hautement qualifié et dévoué à sa mission",
  note: [
    "Mario a fait preuve d'un courage exceptionnel et d'une détermination sans faille dans toutes ses missions.",
    "Ses compétences acrobatiques et sa persévérance en font un atout précieux pour l'Agence.",
  ],
};

const wario: Agent = {
  id: 55929,
  birthdate: "21 décembre, 1982",
  name: "Wario Wario",
  codeName: "Agent Wario",
  placeOfBirth: "Diamond City",
  appearance: {
    Taille: "175 cm",
    Poids: "95 kg",
    Yeux: "Noirs",
    Cheveux: "Chauve avec une petite moustache",
  },
  abilities: [
    "Expertise en inventions et technologie",
    "Capacité à utiliser des power-ups spéciaux",
    "Force physique surhumaine",
  ],
  mission:
    "Acquisition de richesses et de trésors, souvent en rivalité avec Mario",
  missionsHistory: [
    "Infiltration réussie de nombreux donjons et repaires à la recherche de trésors cachés",
    "Confrontation avec Mario à plusieurs reprises pour des enjeux variés",
  ],
  status: "Agent non affilié de la CIA, opérant de manière indépendante",
  note: [
    "Wario est connu pour son tempérament égoïste et son désir ardent de richesse personnelle.",
    "Malgré son apparence, il possède des compétences techniques surprenantes et peut être une force à compter avec.",
  ],
};

const link: Agent = {
  id: 33333,
  birthdate: "15 août, 1986",
  name: "Link Hylia",
  codeName: "Agent Link",
  placeOfBirth: "Hyrule",
  appearance: {
    Taille: "170 cm",
    Poids: "70 kg",
    Yeux: "Bleus",
    Cheveux: "Blonds",
  },
  abilities: [
    "Maîtrise de l'épée et des armes à distance",
    "Capacité à manier la magie et les pouvoirs divins",
    "Compétences d'escalade, de natation et d'équitation",
  ],
  mission:
    "Protéger le royaume d'Hyrule contre les forces du mal, en particulier le seigneur des ténèbres Ganon",
  missionsHistory: [
    "Voyage à travers le temps et les dimensions pour rassembler des artefacts sacrés et sauver Hyrule",
    "Collaboration avec des alliés tels que la Princesse Zelda et d'autres guerriers",
  ],
  status:
    "Agent héroïque de la CIA, intervenant dans des situations de crise pour protéger le royaume",
  note: [
    "Link a fait preuve d'un dévouement inébranlable pour protéger Hyrule et ses habitants.",
    "Ses compétences variées et son courage face à l'adversité font de lui un atout crucial dans la lutte contre le mal.",
  ],
};

const pikachu = {
  id: 25,
  birthdate: "25 mars, 1996",
  name: "Pikachu Sparks",
  codeName: "Agent Pikachu",
  placeOfBirth: "Pallet Town",
  appearance: {
    Taille: "40 cm",
    Poids: "6 kg",
    Yeux: "Noirs",
    Pelage: "Jaune avec des rayures brunes",
  },
  abilities: [
    "Capacité à générer des décharges électriques",
    "Agilité et vitesse supérieures",
    "Capacité de communication avec d'autres Pokémon",
  ],
  mission:
    "Assistance dans la résolution de problèmes liés aux activités de la Team Rocket et autres menaces similaires",
  missionsHistory: [
    "Collaboration avec d'autres Pokémon pour résoudre des mystères et protéger leur environnement",
    "Participation à des compétitions Pokémon pour mettre en avant ses capacités uniques",
  ],
  status:
    "Agent spécial de la CIA, opérant dans le monde des Pokémon pour maintenir la paix et la sécurité",
  note: [
    "Pikachu a montré une loyauté inébranlable envers son dresseur et ses amis, prêt à affronter tous les défis.",
    "Ses compétences électriques et sa capacité à forger des liens avec d'autres Pokémon en font un atout précieux dans le monde des agents secrets.",
  ],
};

const donkeyKong = {
  id: 64,
  birthdate: "9 juillet, 1981",
  name: "Donkey Kong",
  codeName: "Kong",
  placeOfBirth: "Jungle de Donkey Kong",
  appearance: {
    Taille: "198 cm",
    Poids: "300 kg",
    Yeux: "Marron",
    Pelage: "Brun",
  },
  abilities: [
    "Force physique exceptionnelle",
    "Agilité et capacité à grimper rapidement",
    "Leadership naturel",
  ],
  mission:
    "Protection de la jungle de Donkey Kong contre les intrus et les braconniers",
  missionsHistory: [
    "Sauvetage de la Princesse Peach lors d'une mission de secours audacieuse",
    "Affrontement avec de nombreux adversaires redoutables pour défendre sa jungle",
  ],
  status:
    "Agent de terrain de la CIA, spécialisé dans la défense de l'environnement naturel",
  note: [
    "Donkey Kong est un protecteur dévoué de sa jungle et de ses amis, notamment Diddy Kong et Dixie Kong.",
    "Sa force brute et son courage inébranlable en font un atout précieux pour la CIA dans la préservation de la nature.",
  ],
};

export const database: Array<Agent> = [mario, wario, link, pikachu, donkeyKong];
