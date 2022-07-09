import { StyleSheet, View } from "react-native";

import MainNavigator from "./navigation/MainNavigator";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MainNavigator />
    </View>
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
