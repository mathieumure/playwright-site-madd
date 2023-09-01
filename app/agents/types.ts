export type Agent = {
  id: number;
  name: string;
  codeName: string;
  birthdate: string;
  placeOfBirth: string;
  appearance: Record<string, string>;
  abilities: Array<string>;
  mission: string;
  missionsHistory: Array<string>;
  status: string;
  note: Array<string>;
};
