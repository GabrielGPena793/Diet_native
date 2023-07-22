import { TouchableOpacityProps } from 'react-native'
import { Bullet, Container, ContainerProps, Text } from './styles';

type RadioButtonProps = ContainerProps & TouchableOpacityProps & {
  text: string;
  onSelect: (type: string) => void;
}

export function RadioButton({ active, text, type, onSelect, ...rest }: RadioButtonProps) {

  function handleSelect() {
    onSelect(type)
  }

  return (
    <Container
      active={active}
      type={type}
      activeOpacity={0.7}
      onPress={handleSelect}
      {...rest}
    >

      <Bullet type={type} />
      <Text> {text}</Text>

    </Container>
  );
}