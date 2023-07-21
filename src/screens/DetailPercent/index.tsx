import React from 'react';
import { 
  Arrow, 
  Container, 
  ContainerArrowBack, 
  HeightLight, 
  Main, 
  Text, 
  TextStrong, 
  Tittle, 
  boxShadow 
} from './styles';
import { CardMealDetail } from '@components/CardMealDetail';
import { View } from 'react-native';

export function DetailPercent() {

  function click() {
    console.log('click');
  }

  return (
    <Container insideDiet>
      <ContainerArrowBack activeOpacity={0.5} onPress={click}>
        <Arrow  />
      </ContainerArrowBack>

      <HeightLight >
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