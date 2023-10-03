import { PokeListContainer } from "./container/PokelistContainer";
import {
  PokeListContextProvider,
  usePokemons,
} from "./context/PokeListContext";

export function PokeList() {
  const { isLoading, pokemons } = usePokemons();

  return (
    <PokeListContextProvider>
      <PokeListContainer />
    </PokeListContextProvider>
  );
}
