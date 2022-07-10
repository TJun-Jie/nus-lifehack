import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator, BottomTabNavigator } from "./AppNavigator";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

export type Props = {};

const MainNavigator: React.FC<Props> = () => {
  const [user] = useAuthState(auth);
  const isAuth = !!user;

  return (
    <NavigationContainer>
      {isAuth ? <BottomTabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
