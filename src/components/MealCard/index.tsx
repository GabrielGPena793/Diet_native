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
  meal: string;
  insideDiet: boolean;
}

export function MealCard({ id, hour, insideDiet, meal }: MealCardProps) {

  const navigate = useNavigation()

  function handleNavigate() {
    navigate.navigate("mealDetails", { id})
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
        <Bullet insideDiet={insideDiet} />
      </ContainerMeal>
    </Container>
  );
}