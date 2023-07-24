import { TouchableOpacityProps } from 'react-native';
import { Button, StyleProps, Icons, Text } from './styles';

interface ButtonIcon extends TouchableOpacityProps, StyleProps {
  icon: 'trash' | 'pencil' | 'plus';
  text: string;
}

export function ButtonIcon({ icon, text, colorType = 'primary', ...rest }: ButtonIcon) {

  const Icon = Icons[icon]

  return (
    <Button
      colorType={colorType}
      activeOpacity={0.8}
      {...rest}
    >
      <Icon colorType={colorType} />
      <Text colorType={colorType}> {text} </Text>
    </Button>
  );
}