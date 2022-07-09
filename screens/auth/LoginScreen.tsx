import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "../../config/constants";

export type Props = {};

const LoginScreen: React.FC<Props> = () => {
  return (
    <View style={styles.centred}>
      <Text style={styles.title}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor={"#888"}
        autoCapitalize="none"
        onChangeText={() => {}}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor={"#888"}
        autoCapitalize="none"
        onChangeText={() => {}}
      />

      <View style={styles.btmContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.btmText}>
          <Text style={styles.text}>Don't have an account?</Text>
          <Text style={styles.link}>Sign Up</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centred: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.LightBlue,
  },

  title: {
    marginBottom: 50,
    fontSize: 24,
    textAlign: "center",
  },

  input: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    width: 300,
    fontSize: 18,
    marginVertical: 10,
  },

  btmContainer: {
    marginTop: 40,
    alignItems: "center",
  },

  btn: {
    backgroundColor: Colors.DarkGreen,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },

  btnText: {
    color: "white",
    fontSize: 18,
    flexDirection: "column",
  },

  btmText: {
    marginTop: 20,
    flexDirection: "row",
  },

  text: {
    color: "black",
  },

  link: {
    color: "#4897D8",
    marginLeft: 10,
  },
});

export default LoginScreen;
