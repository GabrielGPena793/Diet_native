import React, { useState } from 'react';
import { Container, ContainerButton, Description, LabelDate, Main, Tittle } from './styles';
import { Tag } from '@components/Tag';
import { HeaderBack } from '@components/HeaderBack';
import { View } from 'react-native';
import { ButtonIcon } from '@components/ButtonIcon';
import { AlertModal } from '@components/AlertModal';
import { useNavigation, useRoute } from '@react-navigation/native';

interface RoutePrams {
  id: string;
}

export function MealDetails() {
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation()
  const params = useRoute()
  const { id } = params.params as RoutePrams
 
  function handleModal() {
    setShowModal(!showModal);
  }

  function handleNavigate() {
    navigation.navigate('newMeal', { id })
  }

  return (
    <Container insideDiet>
      <HeaderBack text='Refeição' />
      <Main>
        <View>
          <Tittle>Sanduíche</Tittle>
          <Description>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Description>
        </View>

        <View>
          <LabelDate>Data e hora</LabelDate>
          <Description>
            12/08/2022 às 16:00
          </Description>
        </View>

        <Tag text='dentro da dieta' type='positive' />

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
        onExclude={() => {}}
      />
    </Container>
  );
}