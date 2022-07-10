import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import { Colors, Screens } from "../../config/constants";
import { useSignInWithEmailAndPassword, } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { useNavigation } from "@react-navigation/native";

export type Props = {};

const LoginScreen: React.FC<Props> = () => {
  const [signIn, user, loading, signInError] = useSignInWithEmailAndPassword(auth);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errorMessage = signInError?.message ?? "Something went wrong";

  useEffect(() => {
    if (signInError)
      Alert.alert("Sign in error", errorMessage, [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "Yes", onPress: () => {} },
      ]);
  }, [signInError]);

  const signInHandler = async () => {
    signIn(email, password);

    if (user) navigation.navigate(Screens.Home as any);
  };

  return (
    <View style={styles.centred}>
      <Text style={styles.title}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor={"#888"}
        autoCapitalize="none"
        onChangeText={setEmail}
        keyboardType="email-address"
        value={email}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor={"#888"}
        autoCapitalize="none"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <View style={styles.btmContainer}>
        <TouchableOpacity style={styles.btn} onPress={signInHandler} disabled={loading}>
          <Text style={styles.btnText}>{loading ? "Logging In..." : "Login"}</Text>
        </TouchableOpacity>

        <View style={styles.btmText}>
          <Text style={styles.text}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate(Screens.Signup as any)}>
            <Text style={styles.link}>Sign Up</Text>
          </Pressable>
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
