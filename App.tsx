import { ThemeProvider } from "styled-components/native";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

import { ActivityIndicator } from "react-native";

import theme from "@theme/default";
import { Routes } from "@routes/index";

export default function App() {
  const [ fontsLoad ] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold  })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoad ? <Routes /> :  <ActivityIndicator /> }
    </ThemeProvider>
  );
}

