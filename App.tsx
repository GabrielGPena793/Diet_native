import { ThemeProvider } from "styled-components/native";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import { ActivityIndicator } from "react-native";

import { Home } from "@screens/Home";
import { DetailPercent } from "@screens/DetailPercent";
import { NewMeal } from "@screens/NewMeal";
import { Feedback } from "@screens/Feedback";
import { MealDetails } from "@screens/MealDetails";


import theme from "@theme/default";

export default function App() {
  const [ fontsLoad ] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold  })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoad ? <MealDetails /> :  <ActivityIndicator /> }
    </ThemeProvider>
  );
}

