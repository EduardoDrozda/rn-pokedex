import { css, styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.BLACK};
    margin-top: -70px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.TEXT};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    margin-top: 20px;
  `}
`;

export const InputContainer = styled.View`
  margin-top: 30px;
`;

export const ListContainer = styled.View`
  margin-top: 30px;
  flex: 1;
`;
