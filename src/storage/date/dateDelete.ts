import AsyncStorage from "@react-native-async-storage/async-storage";
import { dateGetAll } from "./dateGetAll"
import { DATE_COLLECTION } from "@storage/storageConfig";



export async function dateDelete(date: string) {

  try {
    const dates = await dateGetAll();

    const dateUpdated = dates.filter(currentDate => currentDate !== date)
    const dateJson = JSON.stringify(dateUpdated);

    await AsyncStorage.setItem(DATE_COLLECTION, dateJson)
  } catch (error) {
    throw error
  }
}