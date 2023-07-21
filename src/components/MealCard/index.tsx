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

interface MealCardProps {
  hour: string;
  meal: string;
  insideDiet: boolean;
}

export function MealCard({ hour, insideDiet, meal }: MealCardProps) {
  return (
    <Container>
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