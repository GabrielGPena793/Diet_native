import { Plus } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 66px 24px 0;

  background-color: ${({ theme }) => theme.COLORS.gray_700};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Avatar = styled.View`
  height: 40px;
  width: 40px;
  overflow: hidden;

  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.COLORS.gray_200};
`;

export const Main = styled.View`
  flex: 1;
  margin-top: 40px;
`

export const Text = styled.Text`

  ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT.REGULAR};
    font-size: ${theme.FONT_SIZE.md}px;
  `};
`;


export const ButtonAdd = styled.TouchableOpacity`
  background: ${({ theme }) => theme.COLORS.gray_200};
  border-radius: 6px;

  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;
  margin-top: 8px;
`;

export const TextButtonAdd = styled.Text`

  ${({ theme }) => css`
    color: ${theme.COLORS.white};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`;

export const IconButtonAdd = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.white,
  size: 18,
  weight: 'bold'
}))``;
