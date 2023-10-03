import { usePokemons } from "@screens/PokeList/context/PokeListContext";
import { PokeListLayout } from "@screens/PokeList/layout/Pokelist";

export function PokeListContainer() {
  const { isLoading, pokemons } = usePokemons();
  return <PokeListLayout pokemons={pokemons} isLoading={isLoading} />;
}
