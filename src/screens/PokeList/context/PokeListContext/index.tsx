import { IPokeBasicInfo, IPokemon } from "@screens/PokeList/interfaces";
import {
  getPokemonBySearch,
  getPokemonByUrl,
  getPokemons,
} from "@screens/PokeList/services";
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { Alert } from "react-native";

type PropsPokeListContext = {
  pokemons: IPokemon[];
  isLoading: boolean;
  searchPokemon: string;
  setSearchPokemon: React.Dispatch<React.SetStateAction<string>>;
};

const PokeListContext = createContext<PropsPokeListContext>(
  {} as PropsPokeListContext
);

type Props = {
  children: ReactNode;
};

const PokeListContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [searchPokemon, setSearchPokemon] = useState<string>("");

  const handlePokemons = useCallback(async () => {
    try {
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
    } catch (error) {
      Alert.alert("Oops, something went wrong, try again in a moment");
    }
  }, []);

  const handlePokemonBySearch = useCallback(async (search: string) => {
    try {
      setIsLoading(true);
      const result = await getPokemonBySearch(search.toLocaleLowerCase());
      setPokemons([result]);
    } catch (error) {
      Alert.alert("Pokemon it's not found.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useLayoutEffect(() => {
    if (!searchPokemon.length) {
      handlePokemons();
      return;
    }

    handlePokemonBySearch(searchPokemon);
    return;
  }, [searchPokemon]);

  return (
    <PokeListContext.Provider
      value={{
        pokemons: pokemons,
        isLoading: isLoading,
        searchPokemon: searchPokemon,
        setSearchPokemon: setSearchPokemon,
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
