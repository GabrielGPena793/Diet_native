import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import styled, { css } from "styled-components/native";


export const Button = styled.TouchableOpacity`
  background: ${({ theme }) => theme.COLORS.gray_200};
  border-radius: 6px;

  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`;

export const Text = styled.Text`

  ${({ theme }) => css`
    color: ${theme.COLORS.white};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`;

const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.white,
  size: 18,
  weight: 'bold',
}))``;


const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  color: theme.COLORS.white,
  size: 18,
  weight: 'bold',
}))``;


const PencilIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
  color: theme.COLORS.white,
  size: 18,
  weight: 'bold',
}))``;

export const Icons = {
  'plus': PlusIcon,
  'trash': TrashIcon,
  'pencil': PencilIcon, 
}