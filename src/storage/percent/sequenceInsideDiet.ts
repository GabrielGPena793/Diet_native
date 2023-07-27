import { MealDTO } from "@storage/meal/MealDTO";
import { getCurrentSequence } from "./getCurrentSequence";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SEQUENCE_COUNT, SEQUENCE_RECORD } from "@storage/storageConfig";
import { getRecordSequence } from "./getRecordSequence";



export async function sequenceInsideDiet(meal: MealDTO) {
  try {
    if (meal.insideDiet === 'positive') {
      let currentSequence = await getCurrentSequence()
      let recordSequence = await getRecordSequence()

      currentSequence++

      await AsyncStorage.setItem(SEQUENCE_COUNT, JSON.stringify(currentSequence))

      if (currentSequence > recordSequence) {
        await AsyncStorage.setItem(SEQUENCE_RECORD, JSON.stringify(currentSequence))
      }
    } else {
      await AsyncStorage.setItem(SEQUENCE_COUNT, JSON.stringify(0))
    }
  } catch (error) {
    throw error
  }
}