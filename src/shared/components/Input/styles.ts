import { Feather } from "@expo/vector-icons";
import { styled } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY};

  flex-direction: row;
`;

export const Input = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 16px;
  color: #000;
`;

export const IconContainer = styled.View`
  width: 50px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.TEXT,
}))``;
