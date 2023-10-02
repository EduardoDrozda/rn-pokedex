import { Header, Input } from "@shared/components";
import { useState } from "react";
import { FlatList } from "react-native";
import * as S from "./styles";

export function PokeList() {
  const [pokemons, setPokemons] = useState<any[]>([]);

  return (
    <S.Container>
      <FlatList
        ListHeaderComponent={
          <>
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
          </>
        }
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: pokemon }) => <></>}
      />
    </S.Container>
  );
}
