import { StyleSheet, ScrollView, View, Text } from "react-native";
import ShopCard from "../../../components/ShopCard";
import { Colors, shopItems } from "../../../config/constants";

export default function Shop() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.cardContainer}>
        <View>
          {shopItems.map((reward, index) => (
            <ShopCard key={index} reward={reward} showPoints />
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <Text style={styles.points}>100 points</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "space-between", flex: 1 },

  cardContainer: {
    paddingVertical: 30,
    paddingHorizontal: 12,
  },

  bottom: {
    padding: 10,
    backgroundColor: Colors.DarkGreen,
  },

  points: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
