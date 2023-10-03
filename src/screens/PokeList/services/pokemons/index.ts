import { IPokemon, IPokemonRequest } from "@screens/PokeList/interfaces";
import { api } from "@shared/services";

export async function getPokemons(): Promise<IPokemonRequest> {
  const { data } = await api.get("pokemon");
  return data;
}

export async function getPokemonByUrl(url: string): Promise<IPokemon> {
  const { data } = await api.get(url);
  return data;
}
