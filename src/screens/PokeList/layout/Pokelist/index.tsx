import { PokemonCard } from "@screens/PokeList/components";
import { IPokemon } from "@screens/PokeList/interfaces";
import { Header, Input, Loading } from "@shared/components";
import { FlatList } from "react-native";
import * as S from "./styles";

type Props = {
  isLoading: boolean;
  pokemons: IPokemon[];
};

export function PokeListLayout({ isLoading, pokemons }: Props) {
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
        />
      </S.InputContainer>
      <S.ListContainer>
        {isLoading ? (
          <Loading isFlex={false} width={50} height={50} />
        ) : (
          <FlatList
            contentContainerStyle={{
              paddingBottom: 40 
            }}
            data={pokemons}
            initialNumToRender={5}
            keyExtractor={(pokemon) => pokemon.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: pokemon }) => {
              return <PokemonCard data={pokemon} />;
            }}
          />
        )}
      </S.ListContainer>
    </S.Container>
  );
}
