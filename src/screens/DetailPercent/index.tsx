import React from 'react';
import {
  Container,
  HeightLight,
  Main,
  Text,
  TextStrong,
  Tittle,
  boxShadow
} from './styles';
import { CardMealDetail } from '@components/CardMealDetail';
import { View } from 'react-native';
import { ButtonBack } from '@components/ButtonBack';

export function DetailPercent() {

  function back() {
    console.log('click');
  }

  return (
    <Container insideDiet>

      <HeightLight >
        <ButtonBack
          style={{ top: 56 }}
          colorArrow='green_dark'
          onPress={back}
        />

        <TextStrong> 90,86% </TextStrong>
        <Text> das refeições dentro da dieta </Text>
      </HeightLight>

      <Main style={boxShadow}>
        <Tittle> Estatísticas gerais </Tittle>

        <CardMealDetail
          bgColor='neutral'
          title='22'
          description='melhor sequência de pratos dentro da dieta'
        />

        <CardMealDetail
          bgColor='neutral'
          title='109'
          description='refeições registradas'
        />

        <View style={{ flexDirection: 'row', gap: 12 }}>
          <CardMealDetail
            bgColor='green'
            halfSize
            title='99'
            description='refeições dentro da dieta'
          />

          <CardMealDetail
            bgColor='red'
            halfSize
            title='10'
            description='refeições fora da dieta'
          />
        </View>
      </Main>
    </Container>
  );
}