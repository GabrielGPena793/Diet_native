import { createStackNavigator } from "@react-navigation/stack"
import { DetailPercent } from "@screens/DetailPercent"
import { Feedback } from "@screens/Feedback"
import { Home } from "@screens/Home"
import { MealDetails } from "@screens/MealDetails"
import { NewMeal } from "@screens/NewMeal"

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {

  return (
    <Navigator
      screenOptions={{ headerShown: false }}
    >

      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="newMeal"
        component={NewMeal}
      />

      <Screen
        name="detailPercent"
        component={DetailPercent}
      />

      <Screen
        name="mealDetails"
        component={MealDetails}
      />

      <Screen
        name="feedback"
        component={Feedback}
      />

    </Navigator>
  )
}