import styled, { css } from "styled-components/native";


export interface ContainerProps {
  halfSize?: boolean;
}


export const Container = styled.View<ContainerProps>`
  position: relative;

  ${({ halfSize }) => halfSize && css`
    flex: 0.5;
  `}
`;


export const Error = styled.Text`
  color: ${({ theme }) => theme.COLORS.red_erro};
  position: absolute;
  bottom: -20px;

`