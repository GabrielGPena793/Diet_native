import { TouchableOpacityProps } from 'react-native'
import { Container, Text } from './styles';

type ButtonProps = TouchableOpacityProps & {
  text: string;
}

export function Button({text, ...rest}: ButtonProps) {
  return (
    <Container {...rest}>
      <Text>{text}</Text>
    </Container>
  );
}