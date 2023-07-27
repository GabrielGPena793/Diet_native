import { mealGetAll } from "@storage/meal/mealGetAll"

export interface MealsDetails {
  percents: string;
  insideDiet: number;
  outDiet: number;
  total: number;
  isPositiveDiet: boolean;
}

export async function getDetails() {

  try {
    const meals = await mealGetAll();

    const insideDiet = meals?.filter(meal => meal.insideDiet === 'positive')
    const outDiet = meals?.filter(meal => meal.insideDiet === 'negative')
    let percents: number = 0
  
    if (insideDiet && meals) {
      if (meals.length > 0) {
        percents =  (insideDiet?.length/meals?.length) * 100
      } else {
        percents = 0
      }
    }

    const percentsData: MealsDetails = {
      insideDiet: insideDiet.length,
      outDiet: outDiet.length,
      total: meals.length,
      percents: percents.toFixed(2),
      isPositiveDiet: percents > 50
    }

    return percentsData
  } catch (error) {
    throw error;
  }
}