import { IPokemon, IPokemonRequest } from "@screens/PokeList/interfaces";
import { api } from "@shared/services";

const ENDPOINT = "pokemon";

export async function getPokemons(): Promise<IPokemonRequest> {
  const { data } = await api.get(ENDPOINT);
  return data;
}

export async function getPokemonByUrl(url: string): Promise<IPokemon> {
  const { data } = await api.get(url);
  return data;
}

export async function getPokemonBySearch(search: string): Promise<IPokemon> {
  const { data } = await api.get(`${ENDPOINT}/${search}`);
  return data;
}
