import { useState } from "react";
import { StyleSheet, View } from "react-native";
import MainNavigator from "./navigation/MainNavigator";
import LoginScreen from "./screens/auth/LoginScreen";
import SignUpScreen from "./screens/auth/SignupScreen";

export default function App() {
  const [isAuth, setIsAuth] = useState(true);

  return <View style={{ flex: 1 }}>{isAuth ? <MainNavigator /> : <SignUpScreen />}</View>;
}

const styles = StyleSheet.create({
  centred: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
