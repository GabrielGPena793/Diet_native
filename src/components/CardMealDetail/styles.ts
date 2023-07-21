import styled, { css } from "styled-components/native";

export interface ContainerStyleProps {
  bgColor: "neutral" | "green" | "red";
  halfSize?: boolean
}

export const Container = styled.View<ContainerStyleProps>`
  padding: 16px;
  justify-content: center;
  align-items: center;
  
  border-radius: 8px;

  ${({ halfSize }) => halfSize && css`
    flex: 0.5;
  `}

  ${({ theme, bgColor }) =>
    bgColor === "green" &&
    css`
      background-color: ${theme.COLORS.green_light};
    `}

  ${({ theme, bgColor }) =>
    bgColor === "neutral" &&
    css`
      background-color: ${theme.COLORS.gray_600};
    `}

  ${({ theme, bgColor }) =>
    bgColor === "red" &&
    css`
      background-color: ${theme.COLORS.red_light};
    `}
`;

export const TextStrong = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.xl}px;
  `};
`;

export const Text = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.gray_200};
    font-family: ${theme.FONT.REGULAR};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`;
