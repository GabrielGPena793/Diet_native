import { TouchableOpacityProps } from 'react-native'
import { ContainerArrowBack, Arrow, ArrowStylesProps } from './styles';


type ButtonBackProps = ArrowStylesProps & TouchableOpacityProps

export function ButtonBack({ colorArrow, ...rest }: ButtonBackProps) {
  return (
    <ContainerArrowBack {...rest}>
      <Arrow  colorArrow={colorArrow}/>
    </ContainerArrowBack>
  );
}