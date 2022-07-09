import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import HomeScreen from "../screens/app/HomeScreen";

import { Screens } from "../config/constants";
import ShopScreen from "../screens/app/shop";
import SettingsScreen from "../screens/app/SettingsScreen";

const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={Screens.Login} component={LoginScreen} />
      <AuthStack.Screen name={Screens.Signup} component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

const BottomTabs = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator screenOptions={{ headerShown: false }}>
      <BottomTabs.Screen name={Screens.Home} component={HomeScreen} />
      <BottomTabs.Screen name={Screens.Shop} component={ShopScreen} />
      <BottomTabs.Screen name={Screens.Settings} component={SettingsScreen} />
    </BottomTabs.Navigator>
  );
};
