import { TouchableOpacityProps } from 'react-native';
import { Button, StyleProps, Icons, Text } from './styles';

interface ButtonIcon extends TouchableOpacityProps, StyleProps {
  icon?: 'trash' | 'pencil' | 'plus';
  text: string;
}

export function ButtonIcon({ icon, text, colorType = 'primary', ...rest }: ButtonIcon) {
  let Icon = Icons.pencil;

  if(icon) {
    Icon = Icons[icon]
  }

  return (
    <Button
      colorType={colorType}
      activeOpacity={0.8}
      {...rest}
    >
      {icon && <Icon colorType={colorType} />}
      <Text colorType={colorType}> {text} </Text>
    </Button>
  );
}