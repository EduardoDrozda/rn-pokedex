import { usePokemons } from "@screens/PokeList/context";
import { PokeListLayout } from "@screens/PokeList/layout/Pokelist";

export function PokeListContainer() {
  const { isLoading, pokemons, handleSearchPokemon, handleOffset } =
    usePokemons();

  return (
    <PokeListLayout
      handleSearchPokemon={handleSearchPokemon}
      handleOffset={handleOffset}
      pokemons={pokemons}
      isLoading={isLoading}
    />
  );
}
