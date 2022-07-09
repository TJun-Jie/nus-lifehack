import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable, Image } from "react-native";
import { Colors, Screens } from "../../config/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export type Props = {};

const HomeScreen: React.FC<Props> = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.menuWrapper}>
        <View style={styles.menuContainer}>
          <Pressable
            style={styles.leftMenu}
            onPress={() => navigation.navigate(Screens.Shop, { tab: "Shop" })}
          >
            <Text style={styles.menuContent}>My Points</Text>
            <Text style={styles.menuHeader}>100</Text>
          </Pressable>
          <Pressable
            style={styles.rightMenu}
            onPress={() => navigation.navigate(Screens.Shop, { tab: "My Rewards" })}
          >
            <Text style={styles.menuContent}>Rewards</Text>
            <Text style={styles.menuHeader}>3 rewards</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <View style={styles.barChart}>
          <View style={styles.barContainer}>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/896630396903624714/995405698177437696/unknown.png",
                }}
                style={styles.img}
              />
            </View>
            <Text style={styles.barLabel}>Plastic</Text>
            <View style={styles.scoreContainer}>
              <Text style={styles.score}>10/40</Text>
            </View>
            <View style={styles.bar} />
          </View>

          <View style={styles.barContainer}>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/896630396903624714/995405747200475197/unknown.png",
                }}
                style={styles.img}
              />
            </View>
            <Text style={styles.barLabel}>Metal</Text>
            <View style={styles.scoreContainer}>
              <Text style={styles.score}>10/40</Text>
            </View>
            <View style={styles.bar} />
          </View>
          <View style={styles.barContainer}>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/896630396903624714/995405788656975872/unknown.png",
                }}
                style={styles.img}
              />
            </View>
            <Text style={styles.barLabel}>Paper</Text>
            <View style={styles.scoreContainer}>
              <Text style={styles.score}>10/40</Text>
            </View>
            <View style={styles.bar} />
          </View>

          <View style={styles.barContainer}>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/896630396903624714/995405827655610431/unknown.png",
                }}
                style={styles.img}
              />
            </View>
            <Text style={styles.barLabel}>Glass</Text>
            <View style={styles.scoreContainer}>
              <Text style={styles.score}>10/40</Text>
            </View>
            <View style={[styles.bar, { height: 200 }]} />
          </View>
        </View>

        <View style={styles.btmBar}></View>
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
    height: 37,
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

  imgContainer: { width: 50, height: 50, marginBottom: 5 },

  img: { height: "100%" },

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
    fontWeight: "bold",
    fontSize: 16,
  },

  menuContent: {
    textAlign: "center",
  },

  barLabel: {
    fontSize: 14,
    color: Colors.DarkBlue,
    marginBottom: 2,
  },

  scoreContainer: {
    backgroundColor: "white",
    paddingVertical: 3,
    paddingHorizontal: 6,
    marginBottom: 5,
    borderRadius: 10,
  },

  score: {
    fontSize: 10,
  },
});

export default HomeScreen;
