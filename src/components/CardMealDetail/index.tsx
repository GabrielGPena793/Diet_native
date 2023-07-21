import React from 'react';
import { Container, ContainerStyleProps, Text, TextStrong } from './styles';

interface CardMealDetailProps extends ContainerStyleProps {
  title: string;
  description: string;
}

export function CardMealDetail({ bgColor, halfSize, title, description }: CardMealDetailProps) {
  return (
    <Container halfSize={halfSize} bgColor={bgColor}>
      <TextStrong>
        {title}
      </TextStrong>

      <Text>
        {description}
      </Text>
    </Container>
  );
}