import { Plus } from "phosphor-react-native";
import styled, { css } from "styled-components/native";


export const Button = styled.TouchableOpacity`
  background: ${({ theme }) => theme.COLORS.gray_200};
  border-radius: 6px;

  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;
  margin-top: 8px;
  margin-bottom: 32px;
`;

export const Text = styled.Text`

  ${({ theme }) => css`
    color: ${theme.COLORS.white};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.white,
  size: 18,
  weight: 'bold'
}))``;
