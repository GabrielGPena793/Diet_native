import React, { useState } from 'react';
import { Container, ContainerButton, Description, LabelDate, Main, Tittle } from './styles';
import { Tag } from '@components/Tag';
import { HeaderBack } from '@components/HeaderBack';
import { View } from 'react-native';
import { ButtonIcon } from '@components/ButtonIcon';
import { AlertModal } from '@components/AlertModal';

export function MealDetails() {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
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