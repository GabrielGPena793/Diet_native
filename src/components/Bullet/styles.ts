import styled from "styled-components/native";

export interface BulletStyleProps {
  type: "positive" | "negative";
}

export const Container = styled.View<BulletStyleProps>`
  height: 8px;
  width: 8px;
  border-radius: 999px;
  margin-right: 8px;

  background-color: ${({ theme, type }) =>
    type === "positive" ? theme.COLORS.green_dark : theme.COLORS.red_dark};
`;
