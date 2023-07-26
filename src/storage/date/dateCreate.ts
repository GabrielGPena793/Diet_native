import { dateGetAll } from "./dateGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATE_COLLECTION } from "@storage/storageConfig";


export async function dateCreate(date: string) {
  
  try {
    const storage = await dateGetAll()
    const dateAlreadyExists = storage.includes(date)

    if (dateAlreadyExists) { 
      return;
    }

    const saveDate = JSON.stringify([...storage, date])

    AsyncStorage.setItem(DATE_COLLECTION, saveDate)
  } catch (error) {
    throw error
  }
}