import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import SearchScreen from "../Screens/SearchScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import DonationRequestScreen from "../Screens/DonationRequestScreen";
import { Icon, Badge } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import colorValue from "../Shared/commoStyle/ColorValue";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Fontisto from "react-native-vector-icons/Fontisto";
const Tab = createMaterialBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
      showLabel:false,
      tabBarStyle: {
        position: 'absolute',
        padding: 1,
        bottom: 20,
        left: 20,
        right: 20,
        elevation: 5,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height:70,
        ...styles.shadow
      }
    }}
      // screenOptions={{
      //   tabBarActiveTintColor: colorValue.primary,
      // }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="home" size={24} color={color} />
          ),
          title: "",
          headerLeft: () => (
            <View style={{ marginHorizontal: 5 }}>
              <Image
                resizeMode="contain"
                style={{ width: 25 }}
                source={require("../../assets/image/menu.png")}
              />
            </View>
          ),

          headerRight: () => (
            <View style={{ marginHorizontal: 5 }}>
              <View>
                <Badge status="error" value={10} />
              </View>
              <Fontisto name="bell" size={25} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="first-aid-alt" size={24} color={color} />
          ),
          title: "",
        }}
      />
      <Tab.Screen
        name="DonationRequestScreen"
        component={DonationRequestScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="blood-drop" size={24} color={color} />
          ),
          title: "",
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="person" size={24} color={color} />
          ),
          title: "",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation:5,
  }
});
