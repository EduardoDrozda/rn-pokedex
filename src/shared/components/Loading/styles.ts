import { css } from "styled-components";
import styled from "styled-components/native";

type Props = {
  isFlex: boolean;
};

export const Container = styled.View<Props>`
  ${({ isFlex }) =>
    isFlex &&
    css`
      flex: 1;
    `};

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.PRIMARY,
}))``;
