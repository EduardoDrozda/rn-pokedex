import { usePokemons } from "@screens/PokeList/context";
import { PokeListLayout } from "@screens/PokeList/layout/Pokelist";

export function PokeListContainer() {
  const { isLoading, pokemons, setSearchPokemon } = usePokemons();

  return (
    <PokeListLayout
      setSearchPokemon={setSearchPokemon}
      pokemons={pokemons}
      isLoading={isLoading}
    />
  );
}
