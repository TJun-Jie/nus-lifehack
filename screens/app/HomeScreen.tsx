import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type Props = {};

const HomeScreen: React.FC<Props> = () => {
  return (
    <View style={styles.centred}>
      <Text>Home</Text>
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

export default HomeScreen;
