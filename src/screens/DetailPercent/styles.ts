import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

interface HeightLightProps {
  insideDiet: boolean;
}


export const Container = styled.SafeAreaView<HeightLightProps>`
  flex: 1;

  background: ${({ theme, insideDiet }) =>
    insideDiet ? theme.COLORS.green_light : theme.COLORS.red_light};

`;

export const HeightLight = styled.View`
  flex: 0.2;
  padding-left: 24px;
  justify-content: center;
  align-items: center;
  padding-top: 8px;

  position: relative;
`;

export const TextStrong = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.xxl}px;
  `};
`;

export const Text = styled.Text`
  margin-top: 2px;

  ${({ theme }) => css`
    color: ${theme.COLORS.gray_200};
    font-family: ${theme.FONT.REGULAR};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`;

export const Main = styled.View`
  flex: 0.8;
  padding: 0 24px;
  gap: 12px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.white};
`;

export const boxShadow = {
  shadowColor: '#333638',
  shadowOffset: {width: 5, height: 32},
  shadowOpacity: 0.5,
  shadowRadius: 20,
  elevation: 30,
}

export const Tittle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};

  margin-top: 33px;
  margin-bottom: 11px;
`;


