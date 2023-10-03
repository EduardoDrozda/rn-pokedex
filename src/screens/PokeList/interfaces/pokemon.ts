export interface IPokemonRequest {
  count: string;
  next: string;
  previous: string;
  results: IPokeBasicInfo[];
}

export interface IPokeBasicInfo {
  name: string;
  url: string;
}

export interface IPokemon {
  id: number;
  name: string;
  order: number;
  base_experience: number;
  weight: number;
  abilities: IPokemonAbility[];
  forms: IPokemonForm[];
  moves: IPokemonMove[];
  species: IPokemonSpecie[];
  sprites: IPokemonSprite[];
  stats: IPokemonStats[];
  types: IPokemonType[];
}

interface IPokemonAbility {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
}

interface IPokemonForm {
  name: string;
  url: string;
}

interface IPokemonMove {
  move: {
    name: string;
    url: string;
  };
}

interface IPokemonSpecie {
  name: string;
  url: string;
}

interface IPokemonSprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface IPokemonStats {
  base_stat: number;
  effort: number;
  slat: { name: string; url: string };
}

interface IPokemonType {
  slot: number;
  type: { name: string; url: string };
}
