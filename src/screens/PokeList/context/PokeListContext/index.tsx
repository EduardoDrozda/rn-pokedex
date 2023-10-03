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
  handleSearchPokemon: (v: string) => void;
  handleOffset: () => void;
};

const PokeListContext = createContext<PropsPokeListContext>(
  {} as PropsPokeListContext
);

type Props = {
  children: ReactNode;
};

const DEFAULT_VALUE = {
  isLoading: false,
  pokemons: [],
  searchPokemon: "",
  isResetList: false,
  offSet: 0,
  limit: 5,
};

const PokeListContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(DEFAULT_VALUE.isLoading);
  const [pokemons, setPokemons] = useState<IPokemon[]>(DEFAULT_VALUE.pokemons);
  const [searchPokemon, setSearchPokemon] = useState<string>(
    DEFAULT_VALUE.searchPokemon
  );
  const [offset, setOffset] = useState<number>(DEFAULT_VALUE.offSet);
  const [isResetList, setIsResetList] = useState<boolean>(
    DEFAULT_VALUE.isResetList
  );

  const handlePokemons = useCallback(async () => {
    try {
      setIsLoading(true);
      const { results } = await getPokemons(offset, DEFAULT_VALUE.limit);

      await Promise.all(
        results.map(async ({ url }: IPokeBasicInfo) => {
          return await getPokemonByUrl(url);
        })
      )
        .then((res) => {
          if (isResetList) {
            setPokemons([...res]);
            return;
          }

          setPokemons([...pokemons, ...res]);
        })
        .finally(() => {
          setIsLoading(DEFAULT_VALUE.isLoading);
          setIsResetList(DEFAULT_VALUE.isResetList);
        });
    } catch (error) {
      Alert.alert("Oops, something went wrong, try again in a moment");
    }
  }, [pokemons]);

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

  const handleSearchPokemon = (v: string) => {
    setSearchPokemon(v);
    setOffset(DEFAULT_VALUE.offSet);
    setIsResetList(true);
  };

  const handleOffset = () => {
    if (searchPokemon.length) return;
    const newOffset = offset + DEFAULT_VALUE.limit;
    setOffset(newOffset);
  };

  useLayoutEffect(() => {
    if (!searchPokemon.length) {
      handlePokemons();
      return;
    }

    handlePokemonBySearch(searchPokemon);
    return;
  }, [searchPokemon, offset]);

  return (
    <PokeListContext.Provider
      value={{
        pokemons,
        isLoading,
        searchPokemon,
        handleSearchPokemon,
        handleOffset,
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
