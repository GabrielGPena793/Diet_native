import React, { useCallback, useEffect, useState } from 'react';
import { SectionList } from 'react-native';
import { MealCard } from '@components/MealCard';
import { Text } from './styles';

import { IAllMeals, mealGetAllOrderByDate } from '@storage/meal/mealGetAllOrderByDate';
import { useFocusEffect } from '@react-navigation/native';

export function MealsList() {
  const [mealsList, setMealsList] = useState<IAllMeals[]>([])


  async function getAllMeals() {
    const meals = await  mealGetAllOrderByDate()

    setMealsList(meals)
  }

  useFocusEffect(useCallback(() => {
    getAllMeals()
  }, []))

  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      sections={mealsList}
      keyExtractor={item => item.id}
      contentContainerStyle={{ paddingBottom: 32 }}
      renderItem={({ item }) => (
        <MealCard
          id={item.id}
          hour={item.hour}
          insideDiet={item.insideDiet}
          meal={item.name}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text>{title}</Text>
      )}
    />
  );
}