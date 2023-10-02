import { Dimensions } from "react-native";

import { css, styled } from "styled-components/native";

const windowWidth = Dimensions.get("window").width;

export const Container = styled.View`
  width: 100%;
`;

export const ContainerBackground = styled.ImageBackground`
  ${({ theme }) => css`
    width: ${windowWidth}px;
    margin-left: -20px;
    height: 220px;
    background: ${theme.COLORS.BACKGROUND};
  `}
`;
