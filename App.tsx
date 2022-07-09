import { useState } from "react";
import { StyleSheet, View } from "react-native";
import MainNavigator from "./navigation/MainNavigator";
import SignUpScreen from "./screens/auth/SignupScreen";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>{isAuth ? <MainNavigator /> : <SignUpScreen />}</View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  centred: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
