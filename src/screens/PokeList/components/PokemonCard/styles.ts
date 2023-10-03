import styled, { css } from "styled-components/native";

interface PokemonType {
  type: string;
}

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.BACKGROUND};
    padding: 20px;
    flex: 1;
  `}
`;

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
  ${({ theme, type }) => css`
    background-color: ${theme.COLORS.BACKGROUNDCARD[type.toUpperCase()]};
  `}
  border-radius: 10px;
  margin-top: 30px;
  flex-direction: row;
  padding: 20px;
`;

export const LeftSide = styled.View`
  width: 50%;
  position: relative;
`;

export const ContentLeftSide = styled.View`
  padding: 20px;
  flex: 1;
`;

export const ImageCardDetailLeftSide = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 90px;
  top: -10px;
`;

export const PokemonContentType = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View<PokemonType>`
  ${({ theme, type }) => css`
    padding: 5px;
    width: 65px;
    height: 25px;
    background-color: ${theme.COLORS.BOXTYPE[type.toUpperCase()]};
    border-radius: 3px;
    margin-left: 5px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.COLORS.BACKGROUND};
    text-transform: capitalize;
  `}
`;

export const RightSide = styled.View`
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.COLORS.TEXT};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
    margin-top: 5px;
    text-transform: capitalize;
    color: ${theme.COLORS.BACKGROUND};
  `}
`;

export const PokemonImage = styled.Image`
  margin-top: -40px;
  width: 130px;
  height: 130px;
`;

export const PokeballCardDetail = styled.Image`
  position: absolute;
  right: -20px;
`;
