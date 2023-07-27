
import { AppError } from "@utils/appError";
import { mealGetByDate } from "./mealGetByDate";



export async function mealGetByIdAndDate(id: string, date: string) {

  try {
    const meals = await mealGetByDate(date);

    if (meals.length === 0) { 
      throw new AppError("Não existe refeição cadastrada")
    }

    const meal = meals.find(meal => meal.id === id)


    if (!meal) { 
      throw new AppError("Refeição não encontrada")
    }


    return meal;

  } catch (error) {
    throw error;
  }

}