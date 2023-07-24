import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export interface StyleProps {
  colorType?: "primary" | "secondary";
}

export const Button = styled.TouchableOpacity<StyleProps>`
  background: ${({ theme }) => theme.COLORS.gray_200};
  border: 1px solid transparent;
  border-radius: 6px;

  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;

  ${({ theme, colorType }) =>
    colorType === "secondary" &&
    css`
      background-color: ${theme.COLORS.white};
      border: 1px solid ${theme.COLORS.gray_200};
    `}
`;

export const Text = styled.Text<StyleProps>`
  ${({ theme, colorType }) => css`
    color: ${colorType === "primary"
      ? theme.COLORS.white
      : theme.COLORS.gray_200};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`;

const PlusIcon = styled(Plus).attrs<StyleProps>(({ theme, colorType }) => ({
  color: colorType === "primary" ? theme.COLORS.white : theme.COLORS.gray_200,
  size: 18,
  weight: "bold",
}))``;

const TrashIcon = styled(Trash).attrs<StyleProps>(({ theme, colorType }) => ({
  color: colorType === "primary" ? theme.COLORS.white : theme.COLORS.gray_200,
  size: 18,
  weight: "bold",
}))``;

const PencilIcon = styled(PencilSimpleLine).attrs<StyleProps>(
  ({ theme, colorType }) => ({
    color: colorType === "primary" ? theme.COLORS.white : theme.COLORS.gray_200,
    size: 18,
    weight: "bold",
  })
)``;

export const Icons = {
  plus: PlusIcon,
  trash: TrashIcon,
  pencil: PencilIcon,
};
