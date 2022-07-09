import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { BottomTabNavigator } from "./AppNavigator";

export type Props = {};

const MainNavigator: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
