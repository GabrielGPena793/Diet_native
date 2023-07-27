import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "./MealDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetByDate } from "./mealGetByDate";
import { dateCreate } from "@storage/date/dateCreate";
import { sequenceInsideDiet } from "@storage/percent/sequenceInsideDiet";
import { mealGetAll } from "./mealGetAll";


export async function mealCreate(meal: MealDTO) {
  try {
    await dateCreate(meal.date)

    const storage = await mealGetByDate(meal.date);
    const objectToSave = JSON.stringify([...storage, meal])
    await AsyncStorage.setItem(`${MEAL_COLLECTION}-${meal.date}`, objectToSave)

    const allMeals = await mealGetAll();
    const allMealToSave = JSON.stringify([...allMeals, meal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, allMealToSave);

    await sequenceInsideDiet(meal)

  } catch (error) {
    throw error
  }
}