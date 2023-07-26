import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.gray_500};
`;

export const Form = styled.View`
  flex: 1;
  padding: 40px 24px 0;
  gap: 24px;

  background-color: ${({theme}) => theme.COLORS.white};

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

export const ContainerForm = styled(TouchableWithoutFeedback)`
  height: 100%;
`

export const ContainerRadio = styled.View`
  position: relative;
`

export const TextRadios = styled.Text`
  margin-bottom: 8px;

    ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`

export const ErrorRadio = styled.Text`
  color: ${({ theme }) => theme.COLORS.red_erro};

  position: absolute;
  bottom: -20px;

`

export const boxShadow = {
  shadowColor: '#333638',
  shadowOffset: {width: 5, height: 32},
  shadowOpacity: 0.5,
  shadowRadius: 20,
  elevation: 30,
}