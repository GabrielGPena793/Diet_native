import styled, { css } from "styled-components/native";

export const List = styled.SectionList`
  margin-bottom: 32px;

`

export const Text = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.lg}px;
  `};
`;
