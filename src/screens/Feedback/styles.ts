import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 32px;

  background-color: ${({ theme }) => theme.COLORS.white};
`;

interface TittleStyleProps {
  message: 'positive' | 'negative';
}

export const Tittle = styled.Text<TittleStyleProps>`
  margin-bottom: 8px;

  ${({ theme, message }) => css`
    color: ${ message === 'positive' ? theme.COLORS.green_dark : theme.COLORS.red_dark};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.xl}px;
  `};
`;

export const SubTittle = styled.Text`
    text-align: center;
    margin-bottom: 40px;

    ${({ theme }) => css`
    color: ${ theme.COLORS.gray_100};
    font-family: ${theme.FONT.REGULAR};
    font-size: ${theme.FONT_SIZE.md}px;
  `};
`


export const Strong = styled.Text`
    ${({ theme }) => css`
    color: ${ theme.COLORS.gray_100};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.md}px;
  `};
`