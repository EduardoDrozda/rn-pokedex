import { IPokeBasicInfo, IPokemon } from "@screens/PokeList/interfaces";
import { getPokemonByUrl, getPokemons } from "@screens/PokeList/services";
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

type PropsPokeListContext = {
  pokemons: IPokemon[];
  isLoading: boolean;
};

const DEFAULT_VALUE: PropsPokeListContext = {
  isLoading: true,
  pokemons: [],
};

const PokeListContext = createContext<PropsPokeListContext>(DEFAULT_VALUE);

type Props = {
  children: ReactNode;
};

const PokeListContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(DEFAULT_VALUE.isLoading);
  const [pokemons, setPokemons] = useState<IPokemon[]>(DEFAULT_VALUE.pokemons);

  const getPokemonsRequest = useCallback(async () => {
    const { results } = await getPokemons();

    await Promise.all(
      results.map(async ({ url }: IPokeBasicInfo) => {
        return await getPokemonByUrl(url);
      })
    )
      .then((res) => {
        setPokemons([...res]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useLayoutEffect(() => {
    getPokemonsRequest();
  }, [setPokemons, setIsLoading]);

  return (
    <PokeListContext.Provider
      value={{
        pokemons: pokemons,
        isLoading: isLoading,
      }}
    >
      {children}
    </PokeListContext.Provider>
  );
};

function usePokemons() {
  const value = useContext(PokeListContext);
  if (!value) throw new Error("The context need be use with PokeListContext");
  return value;
}

export { PokeListContextProvider, usePokemons };
export default PokeListContext;
