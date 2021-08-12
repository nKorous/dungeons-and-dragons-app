export interface MonstersResult {
  count: number;
  results: MonsterList[]
}

export interface MonsterList {
  index: string;
  name: string;
  url: string
}

export interface Monster {
  index: string;
  name: string;
  size: string;
  type: string;
  subtype: string;
  alignment: string;
  armor_class: number;
  hit_points: number;
  hit_dice: number;
  speed: Speed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  proficiencies: ProficiencyItem;
  damage_vulnerabilities: string[];
  damage_resistences: string[];
  senses: Senses;
  languages: string;
  challenge_rating: number;
  xp: number;
  special_abilities: SpecialAbilities;
  actions: Actions;
  legendary_actions?: LegendaryActions[];
  url: string;
}

export interface Speed {
  walk?: string;
  fly?: string;
  swim?: string;
}

export interface ProficiencyItem {
  proficiency: Proficiency,
  value: number
}

export interface Proficiency {
  index: string;
  name: string;
  url: string
}

export interface Senses {
  darkvision?: string;
  blindsignt?: string;
  tremorsense?: string;
  truesight?: string;
}

export interface SpecialAbilities {
  name: string;
  desc: string;
  usages?: { type: string; times: number }
}

export interface Actions {
  name: string;
  desc: string;
  dc?: ActionsDC;
  options: { choose: number; from: ActionsFrom[]}
  damage: ActionsDamage[]
}


export interface ActionsFrom {
  name: string;
  count: number;
  type: string;
}

export interface ActionsDC {
  dc_type: { index: string; name: string; url: string; };
  dc_value: number;
  succes_type: string;
}

export interface ActionsDamage {
  damage_type: { index: string; name: string; url: string };
  damage_dice: string;
}

export interface LegendaryActions {
  name: string;
  desc: string;
  dc: ActionsDC
}

