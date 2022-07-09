import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Reward } from "../config/interfaces";

interface Props {
  reward: Reward;
  showPoints: boolean;
}

export default function ShopCard({ reward, showPoints }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <View style={styles.leftTop}>
          <Text style={styles.title}>{reward.title}</Text>
          <Text style={styles.description}>{reward.description}</Text>
        </View>
        {showPoints && <Text style={styles.leftBottom}>{reward.points} points</Text>}
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2040&q=80",
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginBottom: 20,
    flexDirection: "row",
    borderRadius: 10,
  },

  left: {
    flex: 1,
    marginRight: 10,
    padding: 10,
  },

  leftTop: {},

  title: {
    fontSize: 14,
    fontWeight: "bold",
  },

  description: {
    marginTop: 10,
    fontSize: 12,
  },

  leftBottom: {
    textAlign: "right",
    marginTop: "auto",
    color: "#999",
  },

  imageContainer: {
    width: "35%",
    height: 120,
  },

  image: { height: "100%", borderBottomRightRadius: 10, borderTopRightRadius: 10 },
});
