import { AppError } from "@utils/appError"
import { MealDTO } from "./MealDTO"
import {  mealGetByIdAndDate } from "./mealGetByIdAndDate"
import { mealDelete } from "./mealDelete"
import { mealCreate } from "./mealCreate"


export async function mealEdit(id: string, meal: MealDTO) {
  try {
    const mealStorage = await mealGetByIdAndDate(id, meal.date)
    
    if(!mealStorage) {
      throw new AppError("Essa refeição não está cadastrada")
    }

    await mealDelete(id, meal.date)

    await mealCreate(meal)
  } catch (error) {
    throw error
  }
}