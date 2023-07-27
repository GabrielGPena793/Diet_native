import React, { useCallback, useEffect, useState } from 'react';
import { Arrow, ArrowDetail, Container, ContainerStatusColor, TextSmall, TextStrong } from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { MealsDetails, getDetails } from '@storage/percent/getDetails';

interface PercentStatusProps extends ContainerStatusColor {}

export function PercentStatus({ positive }: PercentStatusProps) {

  const [percent, setPercent] = useState<MealsDetails>()

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate("detailPercent")
  }

  async function getPercentDetails() {
    try {
      const details = await getDetails()
      setPercent(details)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(useCallback(() => {
    getPercentDetails()
  },[]))

  return (
    <Container positive={ percent?.isPositiveDiet }>
      <TextStrong>
        {percent?.percents}%
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