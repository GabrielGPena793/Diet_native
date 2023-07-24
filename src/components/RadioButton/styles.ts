import styled, { css } from "styled-components/native";

export interface ContainerProps {
  active: boolean;
  type: "positive" | "negative";
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex: 0.5;
  flex-direction: row;

  border: 1px solid;
  border-color: transparent;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.gray_600};

  ${({ theme, active, type }) =>
    active &&
    type === "positive" &&
    css`
      background-color: ${theme.COLORS.green_light};
      border-color: ${theme.COLORS.green_dark};
    `}

  ${({ theme, active, type }) =>
    active &&
    type === "negative" &&
    css`
      background-color: ${theme.COLORS.red_light};
      border-color: ${theme.COLORS.red_dark};
    `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`;
