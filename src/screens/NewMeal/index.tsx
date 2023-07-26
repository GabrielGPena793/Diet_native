import { useState } from 'react';
import { Keyboard, View } from 'react-native';
import { Input } from '@components/Input';
import { RadioButton } from '@components/RadioButton';
import { Button } from '@components/Button';
import {
  Container,
  ContainerForm,
  Form,
  TextRadios,
  boxShadow
} from './styles';
import { date, hour } from '@components/Input/inputMasks';
import { HeaderBack } from '@components/HeaderBack';
import { useNavigation } from '@react-navigation/native';
import { MealDTO } from '@storage/meal/MealDTO';
import { mealCreate } from '@storage/meal/mealCreate';

export type RadioValue = 'positive' | 'negative';

export function NewMeal() {

  const [radioSelect, setRadioSelect] = useState<RadioValue>()
  const [inputDate, setInputDate] = useState('')
  const [inputHour, setInputHour] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigation()

  function navigateFeedback() {
    if (radioSelect) {
      console.log(radioSelect)
      navigate.navigate('feedback', { feedbackType: radioSelect })
    }
  }

  function handleSelectRadio(type: RadioValue) {
    setRadioSelect(type)
  }

  async function handleAddNewMeal() {
    try {
      const newMeal = {
        id: new Date().toDateString(),
        name,
        description,
        date: inputDate,
        hour: inputHour
      } as MealDTO

      await mealCreate(newMeal)

      navigateFeedback()
    } catch (error) {
      console.log('handleAddNewMeal', error)
    }
  }

  return (
    <Container>
      <HeaderBack text='Nova refeição' />

      <ContainerForm onPress={Keyboard.dismiss}>
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
            onPress={handleAddNewMeal}
          />
        </Form>
      </ContainerForm>
      
    </Container>
  );
}