import { Agent } from "~/app/agents/types";

const mario: Agent = {
  id: 92955,
  birthdate: "March 10, 1981",
  name: "Mario Mario",
  codeName: "Agent Mario",
  placeOfBirth: "Brooklyn, New York, USA",
  appearance: {
    Height: "155 cm",
    Weight: "89 kg",
    Eyes: "Blue",
    Hair: "Black",
  },
  abilities: [
    "Advanced mastery of jumping and parkour techniques",
    "Experience in plumbing and repairing complex systems",
    "Skills in close combat and object usage",
  ],
  mission:
    "Rescue and protection of Princess Peach of the Mushroom Kingdom from internal and external threats",
  missionsHistory: [
    "Infiltration of Bowser's castle and successful rescue of Princess Peach on multiple occasions",
    "Exploration of fantastic worlds to collect valuable items and defeat enemies",
  ],
  status: "Active MADD agent, highly skilled and dedicated to his mission",
  note: [
    "Mario has shown exceptional courage and unwavering determination in all his missions.",
    "His acrobatic skills and perseverance make him a valuable asset to the Agency.",
  ],
};

const wario: Agent = {
  id: 55929,
  birthdate: "December 21, 1982",
  name: "Wario Wario",
  codeName: "Agent Wario",
  placeOfBirth: "Diamond City",
  appearance: {
    Height: "175 cm",
    Weight: "95 kg",
    Eyes: "Black",
    Hair: "Bald with a small mustache",
  },
  abilities: [
    "Expertise in inventions and technology",
    "Ability to use special power-ups",
    "Superhuman physical strength",
  ],
  mission: "Acquisition of wealth and treasures, often in rivalry with Mario",
  missionsHistory: [
    "Successful infiltration of numerous dungeons and lairs in search of hidden treasures",
    "Confrontation with Mario on multiple occasions for various stakes",
  ],
  status: "Unaffiliated MADD agent, operating independently",
  note: [
    "Wario is known for his selfish temperament and a strong desire for personal wealth.",
    "Despite his appearance, he possesses surprising technical skills and can be a force to be reckoned with.",
  ],
};

const link: Agent = {
  id: 33333,
  birthdate: "August 15, 1986",
  name: "Link Hylia",
  codeName: "Agent Link",
  placeOfBirth: "Hyrule",
  appearance: {
    Height: "170 cm",
    Weight: "70 kg",
    Eyes: "Blue",
    Hair: "Blonde",
  },
  abilities: [
    "Mastery of the sword and ranged weapons",
    "Ability to wield magic and divine powers",
    "Skills in climbing, swimming, and horseback riding",
  ],
  mission:
    "Protecting the kingdom of Hyrule from the forces of evil, especially the dark lord Ganon",
  missionsHistory: [
    "Time and dimension-travel to gather sacred artifacts and save Hyrule",
    "Collaboration with allies such as Princess Zelda and other warriors",
  ],
  status:
    "Heroic MADD agent, intervening in crisis situations to protect the kingdom",
  note: [
    "Link has shown unwavering dedication to protect Hyrule and its inhabitants.",
    "His varied skills and courage in the face of adversity make him a crucial asset in the fight against evil.",
  ],
};

const pikachu = {
  id: 25,
  birthdate: "March 25, 1996",
  name: "Pikachu Sparks",
  codeName: "Agent Pikachu",
  placeOfBirth: "Pallet Town",
  appearance: {
    Height: "40 cm",
    Weight: "6 kg",
    Eyes: "Black",
    Fur: "Yellow with brown stripes",
  },
  abilities: [
    "Ability to generate electrical discharges",
    "Superior agility and speed",
    "Ability to communicate with other Pokémon",
  ],
  mission:
    "Assisting in resolving issues related to Team Rocket's activities and similar threats",
  missionsHistory: [
    "Collaboration with other Pokémon to solve mysteries and protect their environment",
    "Participation in Pokémon competitions to showcase its unique abilities",
  ],
  status:
    "Special MADD agent, operating in the world of Pokémon to maintain peace, security and more. Stop evolving since his first mission.",
  note: [
    "Pikachu has shown unwavering loyalty to its trainer and friends, ready to face all challenges.",
    "Its electrical skills and ability to form bonds with other Pokémon make it a valuable asset in the world of secret agents.",
  ],
};

const donkeyKong = {
  id: 64,
  birthdate: "July 9, 1981",
  name: "Donkey Kong",
  codeName: "Agent Kong",
  placeOfBirth: "Donkey Kong Jungle",
  appearance: {
    Height: "198 cm",
    Weight: "300 kg",
    Eyes: "Brown",
    Fur: "Brown",
  },
  abilities: [
    "Exceptional physical strength",
    "Agility and rapid climbing ability",
    "Natural leadership",
  ],
  mission: "Protection of Donkey Kong Jungle from intruders and poachers",
  missionsHistory: [
    "Rescue of Princess Peach in a daring rescue mission",
    "Confrontation with numerous formidable opponents to defend the jungle",
  ],
  status:
    "Field agent of the MADD, specialized in the defense of the natural environment",
  note: [
    "Donkey Kong is a dedicated protector of his jungle and friends, including Diddy Kong and Dixie Kong.",
    "His raw strength and unwavering courage make him a valuable asset for the MADD in preserving nature.",
  ],
};

const x: Agent = {
  id: -1,
  birthdate: "Unknown",
  name: "Unknown",
  codeName: "Agent X",
  placeOfBirth: "Unknown",
  appearance: {
    Height: "175 cm",
    Weight: "Unknown",
    Eyes: "Blue",
    Hair: "Black",
  },
  abilities: [
    "Master of playwright",
    "Lier",
  ],
  mission:
      "Convert to Playwright all Cypress user by infiltrating Cypress agency",
  missionsHistory: [
    "Frontops infiltration",
    "Convert to Vite, Webpack users",
  ],
  status: "Active MADD agent, highly skilled and dedicated to his mission",
  note: [
    "Agent X is our first agent and the creator of this agency",
    "His infiltrating skills and perseverance make him a valuable asset to the Agency.",
  ],
};

export const database: Array<Agent> = [mario, wario, link, pikachu, donkeyKong, x];
