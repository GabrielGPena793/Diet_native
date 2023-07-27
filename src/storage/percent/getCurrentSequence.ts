import AsyncStorage from "@react-native-async-storage/async-storage";
import { SEQUENCE_COUNT } from "@storage/storageConfig";


export async function getCurrentSequence() {
  try {
    const storage = await AsyncStorage.getItem(SEQUENCE_COUNT)

    const sequence: number = storage ? JSON.parse(storage) : 0;

    return sequence
  } catch (error) {
    throw error;
  }
}