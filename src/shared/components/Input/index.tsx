import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import * as S from "./styles";

interface Props extends TextInputProps {
  icon?: keyof typeof Feather.glyphMap;
}

export function Input({ icon, ...rest }: Props) {
  return (
    <S.Container>
      {icon && (
        <S.IconContainer>
          <S.Icon name={icon} />
        </S.IconContainer>
      )}
      <S.Input {...rest} />
    </S.Container>
  );
}
