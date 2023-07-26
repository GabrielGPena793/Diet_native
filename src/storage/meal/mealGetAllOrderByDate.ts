import { dateGetAll } from "@storage/date/dateGetAll";
import { mealGetByDate } from "./mealGetByDate";
import { MealDTO } from "./MealDTO";
import { sortDatesDescending } from "@utils/sortDates";

export type IAllMeals = {
  title: string;
  data: MealDTO[]
}

export async function mealGetAllOrderByDate() {
  try {
    const allMeals: IAllMeals[] = []
    const dates = await dateGetAll();

    const datesSorted = sortDatesDescending(dates)
  
    for (let i = 0; i < datesSorted.length; i++) { 
      const meals = await mealGetByDate(datesSorted[i]);
      
      const mealObject = {
        title: datesSorted[i],
        data: meals
      }
  
      allMeals.push(mealObject);
    }
  
    return allMeals;
  } catch (error) {
    throw error
  }
}
