import styled, { css } from "styled-components/native";

export interface StyleProps {
  colorType?: "primary" | "secondary";
}

export const Container = styled.TouchableOpacity`
  padding: 18px 24px;
  background-color: ${({theme}) => theme.COLORS.gray_200};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`

export const Text = styled.Text`
   ${({ theme }) => css`
    color: ${theme.COLORS.white};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`