import { TouchableOpacityProps } from 'react-native'
import { Container, ContainerProps, Text } from './styles';
import { Bullet } from '@components/Bullet';
import { RadioValue } from '@screens/NewMeal';

type RadioButtonProps = ContainerProps & TouchableOpacityProps & {
  text: string;
  onSelect: (type: RadioValue) => void;
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