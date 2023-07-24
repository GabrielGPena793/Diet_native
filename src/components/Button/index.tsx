import { TouchableOpacityProps } from 'react-native'
import { Container, Text } from './styles';

type ButtonProps = TouchableOpacityProps & {
  text: string;
}

export function Button({text, ...rest}: ButtonProps) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Text>{text}</Text>
    </Container>
  );
}