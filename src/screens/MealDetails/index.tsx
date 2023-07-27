import React, { useEffect, useState } from 'react';
import { Container, ContainerButton, Description, LabelDate, Main, Tittle } from './styles';
import { Tag } from '@components/Tag';
import { HeaderBack } from '@components/HeaderBack';
import { View } from 'react-native';
import { ButtonIcon } from '@components/ButtonIcon';
import { AlertModal } from '@components/AlertModal';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MealDTO } from '@storage/meal/MealDTO';
import { mealGetById } from '@storage/meal/mealGetById';

interface RoutePrams {
  id: string;
}

export function MealDetails() {
  const [showModal, setShowModal] = useState(false);
  const [meal, setMeal] = useState<MealDTO>({} as MealDTO)

  const navigation = useNavigation()
  const params = useRoute()
  const { id } = params.params as RoutePrams

  function handleModal() {
    setShowModal(!showModal);
  }

  function handleNavigate() {
    navigation.navigate('newMeal', { id })
  }

  async function getMealDetails() {
    const meal = await mealGetById(id)

    setMeal(meal)
  }


  useEffect(() => {
    getMealDetails()
  }, [id])


  return (
    <Container insideDiet>
      <HeaderBack text='Refeição' />
      <Main>
        <View>
          <Tittle>{meal.name}</Tittle>
          <Description>
            {meal.description}
          </Description>
        </View>

        <View>
          <LabelDate>Data e hora</LabelDate>
          <Description>
            {meal.date} ás {meal.hour}
          </Description>
        </View>

        <Tag text='dentro da dieta' type={meal.insideDiet} />

        <ContainerButton>
          <ButtonIcon
            icon='pencil'
            text='Editar refeição'
            onPress={handleNavigate}
          />
          <ButtonIcon
            colorType='secondary'
            icon='trash'
            text='Excluir refeição'
            onPress={handleModal}
          />
        </ContainerButton>

      </Main>

      <AlertModal
        text='Deseja realmente excluir o registro da refeição?'
        showModal={showModal}
        onCancel={handleModal}
        onExclude={() => { }}
      />
    </Container>
  );
}