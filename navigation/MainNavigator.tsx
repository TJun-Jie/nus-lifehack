import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigator, BottomTabNavigator } from "./AppNavigator";

export type Props = {};

const MainNavigator: React.FC<Props> = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <NavigationContainer>
      {isAuth ? <BottomTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
