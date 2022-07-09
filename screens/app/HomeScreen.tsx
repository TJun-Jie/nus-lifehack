import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Colors } from "../../constant";
import Ionicons from "@expo/vector-icons/Ionicons";

export type Props = {};

const HomeScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.menuWrapper}>
        <View style={styles.menuContainer}>
          <View style={styles.leftMenu}>
            <Text style={styles.menuHeader}>400</Text>
            <Text style={styles.menuContent}>My Points</Text>
          </View>
          <View style={styles.rightMenu}>
            <Text style={styles.menuHeader}>My Points</Text>
            <Text style={styles.menuContent}>Shop</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.barChart}>
          <View style={styles.barContainer}>
            <View style={styles.barIcon}>
              <Ionicons name="add" size={30} />
            </View>
            <View style={styles.bar} />
          </View>
          <View style={styles.barContainer}>
            <View style={styles.barIcon}>
              <Ionicons name="add" size={30} />
            </View>
            <View style={styles.bar} />
          </View>
          <View style={styles.barContainer}>
            <View style={styles.barIcon}>
              <Ionicons name="add" size={30} />
            </View>
            <View style={styles.bar} />
          </View>
          <View style={styles.barContainer}>
            <View style={styles.barIcon}>
              <Ionicons name="add" size={30} />
            </View>
            <View style={[styles.bar, { height: 200 }]} />
          </View>
        </View>

        <View style={styles.btmBar}>
          <Text style={styles.barText}>Bottles</Text>
          <Text style={styles.barText}>Cans</Text>
          <Text style={styles.barText}>Paper</Text>
          <Text style={styles.barText}>Plastic</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.LightBlue,
    width: "100%",
    justifyContent: "space-between",
  },

  btmBar: {
    backgroundColor: Colors.DarkGreen,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  barText: {
    width: "20%",
    textAlign: "center",
    paddingVertical: 10,
    color: "white",
  },

  barChart: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },

  barContainer: {
    width: "20%",
    alignItems: "center",
  },

  barIcon: {
    backgroundColor: Colors.LightGreen,
    borderRadius: 20,
  },

  bar: {
    width: "50%",
    height: 100,
    backgroundColor: "#964B00",
    margin: "auto",
  },

  menuWrapper: { alignItems: "center", marginTop: 30 },

  menuContainer: {
    backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
    width: "80%",
    borderRadius: 10,
  },

  leftMenu: {
    borderRightWidth: 1,
    borderRightColor: "#C4C4C4",
    width: "50%",
  },

  rightMenu: {
    width: "50%",
  },

  menuHeader: {
    textAlign: "center",
    marginBottom: 5,
  },

  menuContent: {
    textAlign: "center",
  },
});

export default HomeScreen;
