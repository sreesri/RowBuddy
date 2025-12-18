import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HOME_SCREEN, PROJECT_SCREEN } from "./constants";
import ProjectScreen from "./screens/ProjectScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
          <Stack.Screen name={PROJECT_SCREEN} component={ProjectScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({});
