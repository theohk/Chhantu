import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "../Screens/OnBoardingScreen";
import FlashScreen from "../../Flash/FlashScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignupScreen/index";
import HomeScreen from "../Screens/HomeScreen";
import BottomNavigation from "./BottomNavigation";
import DrawerNavigation from "./DrawerNavigation";
import { StatusBar } from "react-native";


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <><StatusBar barStyle="dark-content" /><Stack.Navigator>
      {/* <Stack.Screen
      name="OnBoardingScreen"
      component={OnBoardingScreen}
      options={{
        headerMode: "false",
      }}
    /> */}
      <Stack.Screen
        options={{ headerMode: false }}
        name="LoginScreen"
        component={LoginScreen} />
      <Stack.Screen
        options={{ headerMode: false }}
        name="SignUpScreen"
        component={SignUpScreen} />
      <Stack.Screen
        options={{
          // headerMode: false,
          title: "CHHANTU",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "900",
            fontSize: 20,
          },
          headerLeft: () => null,
        }}
        name="BottomNavigation"
        component={BottomNavigation} />
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
    </Stack.Navigator></>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
