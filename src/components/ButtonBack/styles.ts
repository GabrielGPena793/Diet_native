import { ArrowLeft } from "phosphor-react-native"
import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

export const ContainerArrowBack = styled(TouchableOpacity)`
`

export interface ArrowStylesProps {
  colorArrow: 'red_dark' | 'green_dark' | 'gray_300'
}

export const Arrow = styled(ArrowLeft).attrs<ArrowStylesProps>(({ theme, colorArrow }) => ({
  size: 24,
  color: theme.COLORS[colorArrow],
}))``