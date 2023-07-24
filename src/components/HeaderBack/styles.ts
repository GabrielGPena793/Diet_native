import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Header = styled.View`
  height: 85px;
  flex-direction: row;
  align-items: center;
  gap: 82px;
  padding: 0 24px;
  margin-top: 12px;
`;

export const HeaderText = styled.Text`

  ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.lg}px;
  `};
`;