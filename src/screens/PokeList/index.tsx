import { PokeListContainer } from "./container";
import { PokeListContextProvider } from "./context";

export function PokeList() {
  return (
    <PokeListContextProvider>
      <PokeListContainer />
    </PokeListContextProvider>
  );
}
