import { TouchableOpacityProps } from 'react-native';
import { Button, Icons, Text } from './styles';

interface ButtonIcon extends TouchableOpacityProps {
  icon: 'trash' | 'pencil' | 'plus';
  text: string;
}

export function ButtonIcon({ icon, text, ...rest }: ButtonIcon) {
  
  const Icon = Icons[icon]

  return (
    <Button activeOpacity={0.8} {...rest}>
      <Icon />
      <Text> {text} </Text>
    </Button>
  );
}