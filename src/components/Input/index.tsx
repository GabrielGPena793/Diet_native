import { Container, ContainerProps, InputText, Label } from './styles';
import { MaskInputProps } from 'react-native-mask-input';

type InputProps = ContainerProps & MaskInputProps & {
  label: string;
  mask?:  (string | RegExp)[];
}

export function Input({ label, halfSize = false, mask, ...rest }: InputProps) {
  return (
    <Container halfSize={halfSize}>
      <Label>{label}</Label>
      <InputText
        mask={mask}
        placeholder=''
        {...rest}
      />
    </Container>
  );
}