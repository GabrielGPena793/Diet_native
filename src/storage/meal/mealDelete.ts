import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetByDate } from "./mealGetByDate";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { dateDelete } from "@storage/date/dateDelete";



export async function mealDelete(id: string, date: string) {

  try {
    const meals = await mealGetByDate(date);
    const mealsUpdated = meals.filter(meal => meal.id !== id);
    const mealJson = JSON.stringify(mealsUpdated)

    await AsyncStorage.setItem(`${MEAL_COLLECTION}-${date}`,  mealJson)

    if(mealsUpdated.length === 0) {
      await dateDelete(date)
    }

  } catch (error) {
    throw error;
  }

}