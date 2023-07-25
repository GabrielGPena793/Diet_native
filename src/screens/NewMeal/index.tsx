import { useState } from 'react';
import { View } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';

export type RadioValue = 'positive' | 'negative';

export function NewMeal() {

  const [radioSelect, setRadioSelect] = useState<RadioValue>()
  const [inputDate, setInputDate] = useState('')
  const [inputHour, setInputHour] = useState('')

  const navigate = useNavigation()

  function handleNavigateFeedback() {
    if (radioSelect) {
      console.log(radioSelect)
      navigate.navigate('feedback', { feedbackType: radioSelect })
    }
  }


  function handleSelectRadio(type: RadioValue) {
    setRadioSelect(type)
  }

  return (
    <Container>
      <HeaderBack text='Nova refeição' />

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

        <Button
          style={{ marginTop: 85 }}
          text='Cadastrar refeição'
          onPress={handleNavigateFeedback}
        />
      </Form>
    </Container>
  );
}