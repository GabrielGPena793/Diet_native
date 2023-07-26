import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATE_COLLECTION, MEAL_COLLECTION } from "@storage/storageConfig";
import { MealDTO } from "./MealDTO";


export async function mealGetByDate(date: string) {

  try {
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${date}`)

    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error
  }

}