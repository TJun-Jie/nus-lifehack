import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

export type Props = {};

const SettingsScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.personal}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
              }}
            />
          </View>

          <View style={styles.midPersonal}>
            <Text>John Doe</Text>
            <Text>john@doe.com</Text>
          </View>

          <View style={styles.rightPersonal}>
            <Ionicons name="qr-code-outline" size={30} />
          </View>
        </View>

        <Text style={styles.title}>Alert</Text>
        <View style={styles.row}>
          <Ionicons name="people" size={20} />
          <Text style={styles.rowText}>Friends</Text>
        </View>
        <View style={[styles.row, { borderBottomWidth: 0 }]}>
          <Ionicons name="notifications" size={20} />
          <Text style={styles.rowText}>Notifications</Text>
        </View>

        <Text style={styles.title}>Preferences</Text>
        <View style={styles.row}>
          <Ionicons name="megaphone" size={20} />
          <Text style={styles.rowText}>Ads</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="lock-closed" size={20} />
          <Text style={styles.rowText}>Privacy</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="moon" size={20} />
          <Text style={styles.rowText}>Dark Mode</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="exit-outline" size={20} />
          <Pressable onPress={() => signOut(auth)}>
            <Text style={styles.rowText}>Logout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    justifyContent: "space-between",
  },

  imageContainer: {
    width: 50,
    height: 50,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },

  personal: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    marginTop: 10,
  },

  midPersonal: {},

  rightPersonal: {},

  title: {
    backgroundColor: "#F2F2F2",
    padding: 20,
    fontSize: 14,
    color: "black",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },

  rowText: {
    marginLeft: 10,
  },
});

export default SettingsScreen;
