import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.gray_500};
`;

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

export const Form = styled.View`
  flex: 1;
  padding: 40px 24px 0;
  gap: 24px;

  background-color: ${({theme}) => theme.COLORS.white};

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

export const TextRadios = styled.Text`
  margin-bottom: 8px;

    ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`

export const boxShadow = {
  shadowColor: '#333638',
  shadowOffset: {width: 5, height: 32},
  shadowOpacity: 0.5,
  shadowRadius: 20,
  elevation: 30,
}