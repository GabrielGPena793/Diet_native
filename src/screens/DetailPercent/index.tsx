import React, { useEffect, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { getRecordSequence } from '@storage/percent/getRecordSequence';

export function DetailPercent() {

  const [sequence, setSequence] = useState(0)

  const navigation = useNavigation()

  function back() {
    navigation.goBack()
  }

  async function getRecordSequenceDiet() {
    try {
      const sequence = await getRecordSequence();
      setSequence(sequence)
    } catch (error) {
      console.log('getRecordSequenceDiet', error);
    }
  }

  useEffect(() => {
    getRecordSequenceDiet()
  }, [])

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
          title={`${sequence}`}
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