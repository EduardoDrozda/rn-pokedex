import { PokemonCard } from "@screens/PokeList/components";
import { IPokemon } from "@screens/PokeList/interfaces";
import { Header, Input, Loading } from "@shared/components";
import debounce from "lodash.debounce";
import { useMemo } from "react";
import { FlatList, View } from "react-native";
import * as S from "./styles";

type Props = {
  isLoading: boolean;
  pokemons: IPokemon[];
  handleSearchPokemon: (v: string) => void;
  handleOffset: () => void;
};

export function PokeListLayout({
  isLoading,
  pokemons,
  handleSearchPokemon,
  handleOffset,
}: Props) {
  const handleSearch = useMemo(() => {
    return debounce(handleSearchPokemon, 500);
  }, []);

  return (
    <S.Container>
      <Header />
      <S.Title>Pokédex</S.Title>
      <S.Subtitle>
        Search for Pokémon by name or using the {"\n"}
        National Pokédex number.
      </S.Subtitle>
      <S.InputContainer>
        <Input
          placeholder="What Pokémon are you looking for?"
          icon="search"
          returnKeyLabel="Done"
          returnKeyType="done"
          onChangeText={handleSearch}
        />
      </S.InputContainer>
      <S.ListContainer>
        <FlatList
          contentContainerStyle={{
            paddingBottom: 40,
          }}
          data={pokemons}
          initialNumToRender={5}
          keyExtractor={(pokemon) => pokemon.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: pokemon }) => {
            return <PokemonCard data={pokemon} />;
          }}
          onEndReached={handleOffset}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() =>
            isLoading && (
              <View style={{ marginTop: 10 }}>
                <Loading isFlex={false} width={50} height={50} />
              </View>
            )
          }
        />
      </S.ListContainer>
    </S.Container>
  );
}
