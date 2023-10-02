import * as S from "./styles";

import pokeballImage from "@assets/png/pokeball.png";

export function Header() {
  return (
    <S.Container>
      <S.ContainerBackground source={pokeballImage} />
    </S.Container>
  );
}
