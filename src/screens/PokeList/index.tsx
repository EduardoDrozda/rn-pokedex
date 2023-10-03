
import { PokeListContainer } from "./container";
import { PokeListContextProvider, usePokemons } from "./context";


export function PokeList() {
  const { isLoading, pokemons } = usePokemons();

  return (
    <PokeListContextProvider>
      <PokeListContainer />
    </PokeListContextProvider>
  );
}
