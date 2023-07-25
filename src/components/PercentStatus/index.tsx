import React from 'react';
import { Arrow, ArrowDetail, Container, ContainerStatusColor, TextSmall, TextStrong } from './styles';
import { useNavigation } from '@react-navigation/native';

interface PercentStatusProps extends ContainerStatusColor {}

export function PercentStatus({ positive }: PercentStatusProps) {

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate("detailPercent")
  }

  return (
    <Container positive={ positive }>
      <TextStrong>
        90,86%
      </TextStrong>

      <TextSmall>
        das refeições dentro da dieta
      </TextSmall>

      <ArrowDetail activeOpacity={0.5} onPress={handleGoBack}>
        <Arrow positive={ positive }/>
      </ArrowDetail>
    </Container>
  );
}