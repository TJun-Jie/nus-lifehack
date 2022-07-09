import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import HomeScreen from "../screens/app/HomeScreen";
import CameraScreen from "../screens/app/CameraScreen";
import ScanDetailsScreen from "../screens/app/ScanDetailsScreen";
import MapScreen from "../screens/app/MapScreen";

import { Screens } from "../config/constants";
import ShopScreen from "../screens/app/shop";
import SettingsScreen from "../screens/app/SettingsScreen";

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={Screens.Login} component={LoginScreen} />
      <AuthStack.Screen name={Screens.Signup} component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

const ScanStack = createStackNavigator();

const ScanStackNavigator = () => {
  return (
    <ScanStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ScanStack.Screen name={Screens.Camera} component={CameraScreen} />
      <ScanStack.Screen
        name={Screens.ScanDetail}
        component={ScanDetailsScreen}
      />
    </ScanStack.Navigator>
  );
};

const BottomTabs = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator screenOptions={{ headerShown: false }}>
      <BottomTabs.Screen name={Screens.Home} component={HomeScreen} />
      <BottomTabs.Screen name={Screens.Map} component={MapScreen} />
      <BottomTabs.Screen
        name={Screens.Scan}
        component={ScanStackNavigator}
        options={{
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <BottomTabs.Screen name={Screens.Shop} component={ShopScreen} />
      <BottomTabs.Screen name={Screens.Settings} component={SettingsScreen} />
    </BottomTabs.Navigator>
  );
};
