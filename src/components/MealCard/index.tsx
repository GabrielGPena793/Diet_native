import React from 'react';
import { 
  Bullet, 
  Container, 
  ContainerHour, 
  ContainerMeal, 
  Divider, 
  TextHour, 
  TextMeal 
} from './styles';
import { useNavigation } from '@react-navigation/native';

interface MealCardProps {
  id: string;
  hour: string;
  date: string;
  meal: string;
  insideDiet: 'positive' | 'negative';
}

export function MealCard({ id, hour, insideDiet, meal, date }: MealCardProps) {

  const navigate = useNavigation()

  function handleNavigate() {
    navigate.navigate("mealDetails", { id, date })
  }

  return (
    <Container activeOpacity={0.8} onPress={handleNavigate}>
      <ContainerHour>
        <TextHour>{hour}</TextHour>
        <Divider />
      </ContainerHour>
      <ContainerMeal>
        <TextMeal>
          {meal}
        </TextMeal>
        <Bullet insideDiet={insideDiet === 'positive'} />
      </ContainerMeal>
    </Container>
  );
}