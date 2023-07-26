import { InputText, Label } from './styles';
import { MaskInputProps } from 'react-native-mask-input';

export type InputProps = MaskInputProps & {
  label: string;
  mask?: (string | RegExp)[];
}

export function Input({ label, mask, ...rest }: InputProps) {
  return (
    <>
      <Label>{label}</Label>
      <InputText
        mask={mask}
        placeholder=''
        {...rest}
      />
    </>
  );
}