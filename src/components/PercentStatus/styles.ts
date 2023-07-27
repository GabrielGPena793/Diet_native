import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export interface ContainerStatusColor {
  positive?: boolean;
}

export const Container = styled.View<ContainerStatusColor>`
  background-color: ${({ theme, positive }) =>
    positive ? theme.COLORS.green_light : theme.COLORS.red_light};

  padding: 16px 20px;
  border-radius: 8px;
  margin-top: 32px;

  position: relative;
`;

export const TextStrong = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.xxl}px;
  `};
`;

export const TextSmall = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.gray_200};
    font-family: ${theme.FONT.REGULAR};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`;

export const ArrowDetail = styled.TouchableOpacity`
  position: absolute;

  top: 10px;
  right: 10px;
`;

export const Arrow = styled(ArrowUpRight).attrs<ContainerStatusColor>(({ theme, positive }) => ({
  size: 24,
  color: positive ? theme.COLORS.green_dark :  theme.COLORS.red_dark,
}))``;