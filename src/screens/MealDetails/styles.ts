import styled, { css } from "styled-components/native";

interface ContainerStyleProps {
  insideDiet: boolean;
}

export const Container = styled.SafeAreaView<ContainerStyleProps>`
  flex: 1;

  background: ${({ theme, insideDiet }) =>
    insideDiet ? theme.COLORS.green_light : theme.COLORS.red_light};
`;

export const Main = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.white};
`

export const Tittle = styled.Text`
   ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.lg}px;
  `};
`

export const Description = styled.Text`
   ${({ theme }) => css`
    color: ${theme.COLORS.gray_200};
    font-family: ${theme.FONT.REGULAR};
    font-size: ${theme.FONT_SIZE.md}px;
  `};
`


export const LabelDate = styled.Text`
   ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`