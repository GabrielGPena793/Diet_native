import React from 'react';
import { SectionList } from 'react-native';
import { MealCard } from '@components/MealCard';
import { Text } from './styles';

import { format } from 'date-fns'

const exampleData = [
  {
    title: format(new Date(), "dd'.'MM'.'yy"),
    data: [{
      hour: format(new Date(), 'H:m'),
      meal: 'Pizza',
      insideDiet: true,
    },
    {
      hour: format(new Date(), 'H:m'),
      meal: 'Lazy Cookies',
      insideDiet: false,
    },
    {
      hour: format(new Date(), 'H:m'),
      meal: 'healthy',
      insideDiet: true,
    }
    ],
  },
  {
    title: format(new Date(), "dd'.'MM'.'yy"),
    data: [{
      hour: format(new Date(), 'H:m'),
      meal: 'Pizza',
      insideDiet: false,
    },
    {
      hour: format(new Date(), 'H:m'),
      meal: 'Lazy Cookies',
      insideDiet: true,
    },
    {
      hour: format(new Date(), 'H:m'),
      meal: 'healthy',
      insideDiet: true,
    }
    ],
  }
]

export function MealsList() {
  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      sections={exampleData}
      keyExtractor={(item, index) => item.meal + index}
      contentContainerStyle={{ paddingBottom: 32 }}
      renderItem={({ item }) => (
        <MealCard 
          hour={item.hour}
          insideDiet={item.insideDiet}
          meal={item.meal}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text>{title}</Text>
      )}
    />
  );
}