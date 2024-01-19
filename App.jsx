import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { PaperProvider } from "react-native-paper"

import Main from "./src/screens/Main"
import UserDetails from "./src/screens/UserDetails"

const Stack = createStackNavigator()

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="main">
          <Stack.Screen
            name={"main"}
            component={Main}
            options={{ title: "User List" }}
          />
          <Stack.Screen
            name={"user-details"}
            component={UserDetails}
            options={{ title: "User Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
