import { useState } from 'react';
import { View } from 'react-native';
import { ButtonBack } from '@components/ButtonBack';
import { Input } from '@components/Input';
import { RadioButton } from '@components/RadioButton';
import { Button } from '@components/Button';
import { 
  Container, 
  Form, 
  TextRadios, 
  boxShadow
} from './styles';
import { date, hour } from '@components/Input/inputMasks';
import { HeaderBack } from '@components/HeaderBack';

export function NewMeal() {

  const [radioSelect, setRadioSelect] = useState('')
  const [inputDate, setInputDate] = useState('')
  const [inputHour, setInputHour] = useState('')


  function handleSelectRadio(type: string) {
    setRadioSelect(type)
  }

  return (
    <Container>
      <HeaderBack />

      <Form style={boxShadow}>
        <Input label='Nome' placeholder='example' />

        <Input
          label='Descrição'
          placeholder='example'
          multiline numberOfLines={5}
          textAlignVertical='top'
        />

        <View style={{ flexDirection: 'row', gap: 20 }}>
          <Input
            label='Data'
            keyboardType='numeric'
            placeholder='00/00/0000'
            mask={date}
            halfSize
            onChangeText={(masked, unMasked) => setInputDate(masked)}
            value={inputDate}
          />

          <Input
            label='Hora'
            keyboardType='numeric'
            placeholder='00:00'
            mask={hour}
            halfSize
            onChangeText={(masked, unMasked) => setInputHour(masked)}
            value={inputHour}
          />
        </View>

        <View>
          <TextRadios>Está dentro da dieta?</TextRadios>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <RadioButton
              active={radioSelect === 'positive'}
              text='Sim' type='positive'
              onSelect={handleSelectRadio}
            />

            <RadioButton
              active={radioSelect === 'negative'}
              text='Não'
              type='negative'
              onSelect={handleSelectRadio}
            />
          </View>
        </View>

        <Button style={{ marginTop: 85 }} text='Cadastrar refeição' />
      </Form>
    </Container>
  );
}