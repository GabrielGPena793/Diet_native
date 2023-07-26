export type MealDTO = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  insideDiet: 'positive' | 'negative';
}