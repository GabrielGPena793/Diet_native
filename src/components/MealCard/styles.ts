import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;

  border: 1px solid ${({theme}) => theme.COLORS.gray_500};
  border-radius: 6px;

  margin-bottom: 12px;
`;

export const ContainerHour = styled.View`
  flex: 0.2;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Divider = styled.View`
  background-color: ${({theme}) => theme.COLORS.gray_400};
  width: 1px;
  height: 14px;

`

export const TextHour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.xs}px;
  `};
`;

export const ContainerMeal = styled.View`
  flex: 0.8;

  flex-direction: row;
  justify-content: space-between;
`;

export const TextMeal = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_200};
    font-family: ${theme.FONT.REGULAR};
    font-size: ${theme.FONT_SIZE.md}px;
  `};
`;

interface BulletProps {
  insideDiet: boolean;
}

export const Bullet = styled.View<BulletProps>`
  height: 14px;
  width: 14px;

  border-radius: 999px;

  background-color: ${({ theme, insideDiet }) =>
    insideDiet ? theme.COLORS.green_mid : theme.COLORS.red_mid};
`;
