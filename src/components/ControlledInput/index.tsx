import { Controller, Control, FieldError } from 'react-hook-form'
import { Input, InputProps } from '@components/Input';
import { Container, ContainerProps, Error } from './styles';

type ControlledInputProps =  InputProps & ContainerProps & {
  control: Control<any>,
  name: string;
  error?: FieldError
}

export function ControlledInput({ control, name, error, halfSize, ...rest }: ControlledInputProps) {
  return (
    <Container halfSize={halfSize}>
      <Controller 
        name={name}
        control={control}
        render={({ field: { onChange, value }}) => (
          <Input 
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
      />
      {error && <Error>{error.message}</Error>}
    </Container>
  );
}