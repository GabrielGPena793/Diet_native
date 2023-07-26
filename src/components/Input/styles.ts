import MaskInput from 'react-native-mask-input';
import styled, { css } from "styled-components/native";

export const Label = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`;

export const InputText = styled(MaskInput).attrs(({theme }) => ({
}))`
  padding: 14px;
  border: 1px solid ${({ theme }) => theme.COLORS.gray_500};
  border-radius: 6px;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.REGULAR};
    font-size: ${theme.FONT_SIZE.md}px;
  `};
`;
