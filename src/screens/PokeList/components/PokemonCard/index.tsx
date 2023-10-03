import React from "react";

import * as S from "./styles";

import dotsImage from "@assets/png/dots.png";
import pokeballCardImage from "@assets/png/pokeballCard.png";

import { IPokemon } from "@screens/PokeList/interfaces";
import { CardAnimation } from "@shared/components";
import { TouchableOpacityProps } from "react-native";

type CardProps = {
  data: IPokemon;
} & TouchableOpacityProps;

export function PokemonCard({ data, ...rest }: CardProps) {
  return (
    <S.PokemonCard type={data.types[0].type.name} {...rest}>
      <S.LeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ImageCardDetailLeftSide source={dotsImage} />
        <S.PokemonContentType>
          {data.types.map((pokemonType) => (
            <S.PokemonType
              key={pokemonType.type.name}
              type={pokemonType.type.name}
            >
              <S.PokemonTypeText>{pokemonType.type.name}</S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonContentType>
      </S.LeftSide>

      <S.RightSide>
        <S.PokeballCardDetail source={pokeballCardImage} />
        <CardAnimation>
          <S.PokemonImage
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            }}
          />
        </CardAnimation>
      </S.RightSide>
    </S.PokemonCard>
  );
}
