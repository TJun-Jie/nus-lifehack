import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type Props = {};

const LoginScreen: React.FC<Props> = () => {
  return (
    <View style={styles.centred}>
      <Text>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centred: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
