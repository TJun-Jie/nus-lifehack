import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { Colors, Screens } from "../../config/constants";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { useMutations } from "../../hooks/useFirebase";

export type Props = {};

const SignupScreen: React.FC<Props> = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signUp, user, loading, signUpError] = useCreateUserWithEmailAndPassword(auth);
  const errorMessage = signUpError?.message ?? "Something went wrong";
  const { createUser } = useMutations();

  useEffect(() => {
    if (user) {
      createUser({
        id: user?.user.uid,
        email,
        firstName: "",
        lastName: "",
        cans: 0,
        plastic: 0,
        metal: 0,
        glass: 0,
        points: 0,
        vouchers: [],
      });
    }
  }, [user]);

  useEffect(() => {
    if (signUpError)
      Alert.alert("Sign up error", errorMessage, [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "Yes", onPress: () => {} },
      ]);
  }, [signUpError]);

  const signupHandler = async () => {
    await signUp(email, password);
    console.log(user);
    if (user) {
      navigation.navigate(Screens.Home as any);
    }
  };

  return (
    <View style={styles.centred}>
      <Text style={styles.title}>Sign up with your email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="First Name"
        placeholderTextColor={"#888"}
        autoCapitalize="none"
        onChangeText={setFirstName}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Last Name"
        placeholderTextColor={"#888"}
        autoCapitalize="none"
        onChangeText={setLastName}
        value={lastName}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor={"#888"}
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor={"#888"}
        autoCapitalize="none"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <View style={styles.btmContainer}>
        <TouchableOpacity style={styles.btn} onPress={signupHandler} disabled={loading}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.btmText}>
          <Text style={styles.text}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate(Screens.Login as any)}>
            <Text style={styles.link}>Log In</Text>
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

export default SignupScreen;
