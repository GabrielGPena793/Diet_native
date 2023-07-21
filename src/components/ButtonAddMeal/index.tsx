import React from 'react';
import { Button, Icon, Text } from './styles';

export function ButtonAddMeal() {
  return (
    <Button activeOpacity={0.8}>
      <Icon />
      <Text> Nova refeição </Text>
    </Button>
  );
}