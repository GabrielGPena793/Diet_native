import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: absolute;
  padding: 0 24px;
  height: 100%;

  justify-content: center;

  background: rgba(0, 0, 0, 0.25);
`

export const Modal = styled.TouchableOpacity`
  align-items: center;

  background: ${({ theme }) => theme.COLORS.white};
  border-radius: 8px;
  padding: 40px 22px 24px;
  gap: 32px;
`

export const Text = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.gray_200};
    font-family: ${theme.FONT.BOLD};
    font-size: ${theme.FONT_SIZE.lg}px;
  `};
`

export const ContainerButton = styled.View`
  flex-direction: row;
  gap: 12px;
`