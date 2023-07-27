import { mealGetAll } from "./mealGetAll";
import { AppError } from "@utils/appError";



export async function mealGetById(id: string) {

  try {
    const meals = await mealGetAll()

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