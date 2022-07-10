import { useState } from "react";
import { StyleSheet, View } from "react-native";
import MainNavigator from "./navigation/MainNavigator";
import SignUpScreen from "./screens/auth/SignupScreen";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase";

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
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
