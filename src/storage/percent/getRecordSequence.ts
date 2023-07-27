import AsyncStorage from "@react-native-async-storage/async-storage";
import { SEQUENCE_RECORD } from "@storage/storageConfig";


export async function getRecordSequence() {
  try {
    const storage = await AsyncStorage.getItem(SEQUENCE_RECORD)

    const sequence: number = storage ? JSON.parse(storage) : 0;

    return sequence
  } catch (error) {
    throw error;
  }
}