import { useEffect, useState } from 'react';
import { Keyboard, Text, View } from 'react-native';
import { RadioButton } from '@components/RadioButton';
import { Button } from '@components/Button';
import {
  Container,
  ContainerForm,
  ContainerRadio,
  ErrorRadio,
  Form,
  TextRadios,
  boxShadow
} from './styles';
import { date, hour } from '@components/Input/inputMasks';
import { HeaderBack } from '@components/HeaderBack';
import { ControlledInput } from '@components/ControlledInput';

import { useNavigation, useRoute } from '@react-navigation/native';
import { MealDTO } from '@storage/meal/MealDTO';
import { mealCreate } from '@storage/meal/mealCreate';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { mealGetByIdAndDate } from '@storage/meal/mealGetByIdAndDate';
import { mealEdit } from '@storage/meal/mealEdit';

export type RadioValue = 'positive' | 'negative';

type RoutePrams = {
  id: string;
  date: string;
}

type FormData = {
  name: string;
  description: string;
  date: string;
  hour: string;
}

const schema = yup.object({
  name: yup.string().required("Informe o nome"),
  description: yup.string().required("Informe uma descrição"),
  date: yup.string().required("Informe uma data"),
  hour: yup.string().required("Informe a hora")
})

export function NewMeal() {

  const [radioSelect, setRadioSelect] = useState<RadioValue>()
  const [radioError, setRadioError] = useState(false)
  const [meal, setMeal] = useState<MealDTO>()

  const navigate = useNavigation()
  const route = useRoute()
  const params = route.params as RoutePrams

  const { 
    control, 
    handleSubmit, 
    formState: { errors },
    setValue
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  function navigateFeedback() {
    if (radioSelect) {
      navigate.navigate('feedback', { feedbackType: radioSelect })
    }
  }

  function handleSelectRadio(type: RadioValue) {
    setRadioSelect(type)
  }

  async function addNewMeal(mealData: FormData) {
    const { date, description, hour, name } = mealData

    if (!radioSelect) {
      return setRadioError(true)
    }

    try {
      const newMeal = {
        id: new Date().getMilliseconds().toString(),
        name,
        description,
        date,
        hour,
        insideDiet: radioSelect,
      } as MealDTO

      await mealCreate(newMeal)

      navigateFeedback()
    } catch (error) {
      console.log('handleAddNewMeal', error)
    }
  }

  async function editMeal(mealData: FormData) {
    try {
      const { id } = params

      const newMeal = {
        ...meal, 
        ...mealData,
        insideDiet: radioSelect
      } as MealDTO


      await mealEdit(id as string, newMeal)

      navigateFeedback()
    } catch (error) {
      console.log('editMeal', error)
    }
  }

  async function handleSubmitMeal(mealData: FormData) {
    if (meal) {
      await editMeal(mealData)
    } else {
      await addNewMeal(mealData)
    }
  }

  async function getMeal() {
    try {
      const { id, date } = params as RoutePrams
      const storageMeal = await mealGetByIdAndDate(id, date)

      setMeal(storageMeal)
      handleSelectRadio(storageMeal.insideDiet)
      setValue('name', storageMeal.name)
      setValue('description', storageMeal.description)
      setValue('hour', storageMeal.hour)
      setValue('date', storageMeal.date)
    } catch (error) {
      console.log('getMeal', error)
    }
  }

  useEffect(() => {
    if(params?.id) {
      getMeal()
    }
  }, [params?.id])

  return (
    <Container>
      <HeaderBack text='Nova refeição' />

      <ContainerForm onPress={Keyboard.dismiss}>
        <Form style={boxShadow}>
          <ControlledInput
            name='name'
            control={control}
            label='Nome'
            placeholder='example'
            error={errors.name}
          />

          <ControlledInput
            name='description'
            control={control}
            label='Descrição'
            placeholder='example'
            multiline numberOfLines={5}
            textAlignVertical='top'
            error={errors.description}
          />

          <View style={{ flexDirection: 'row', gap: 20 }}>
            <ControlledInput
              name='date'
              control={control}
              label='Data'
              keyboardType='numeric'
              placeholder='00/00/0000'
              mask={date}
              halfSize
              error={errors.date}
            />

            <ControlledInput
              name='hour'
              control={control}
              label='Hora'
              keyboardType='numeric'
              placeholder='00:00'
              mask={hour}
              halfSize
              error={errors.hour}
            />
          </View>

          <ContainerRadio>
            <TextRadios>Está dentro da dieta?</TextRadios>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <RadioButton
                active={radioSelect === 'positive'}
                text='Sim' 
                type='positive'
                onSelect={handleSelectRadio}
              />

              <RadioButton
                active={radioSelect === 'negative'}
                text='Não'
                type='negative'
                onSelect={handleSelectRadio}
              />
            </View>
            {(radioError && !radioSelect) && <ErrorRadio>Selecione uma das opções</ErrorRadio>}
          </ContainerRadio>

          <Button
            style={{ marginTop: 85 }}
            text='Cadastrar refeição'
            onPress={handleSubmit(handleSubmitMeal)}
          />
        </Form>
      </ContainerForm>

    </Container>
  );
}