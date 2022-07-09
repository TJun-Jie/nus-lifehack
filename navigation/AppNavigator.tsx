import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import HomeScreen from "../screens/app/HomeScreen";
import CameraScreen from "../screens/app/CameraScreen";
import ScanDetailsScreen from "../screens/app/ScanDetailsScreen";

import { constants } from "../constant";

const ScanStack = createStackNavigator();

const ScanStackNavigator = () => {
  return (
    <ScanStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ScanStack.Screen
        name={constants.screenNames.camera}
        component={CameraScreen}
      />
      <ScanStack.Screen
        name={constants.screenNames.scanDetail}
        component={ScanDetailsScreen}
      />
    </ScanStack.Navigator>
  );
};

const BottomTabs = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTabs.Screen
        name={constants.screenNames.home}
        component={HomeScreen}
      />
      <BottomTabs.Screen
        name={constants.navigatorNames.scanNavigator}
        component={ScanStackNavigator}
        options={{
          tabBarStyle: {
            display: "none",
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen
        name={constants.screenNames.login}
        component={LoginScreen}
      />
      <AuthStack.Screen
        name={constants.screenNames.signup}
        component={SignupScreen}
      />
    </AuthStack.Navigator>
  );
};
