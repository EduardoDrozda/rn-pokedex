import { IPokemon, IPokemonRequest } from "@screens/PokeList/interfaces";
import { api } from "@shared/services";

const ENDPOINT = "pokemon";

export async function getPokemons(
  offset?: number,
  limit?: number
): Promise<IPokemonRequest> {
  const { data } = await api.get(`${ENDPOINT}?offset=${offset}&limit=${limit}`);
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
