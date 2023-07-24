import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 8px 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 144px;

  border-radius: 999px;

  background-color: ${({ theme }) => theme.COLORS.gray_600};
`

export const Text = styled.Text`
    ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.REGULAR};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`