import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type Props = {};

const SignupScreen: React.FC<Props> = () => {
  return (
    <View style={styles.centred}>
      <Text>Signup</Text>
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

export default SignupScreen;
