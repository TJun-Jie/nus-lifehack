import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Reward } from "../config/interfaces";

interface Props {
  reward: Reward;
  showPoints: boolean;
  onRemove: () => void;
}

export default function ShopCard({ reward, showPoints, onRemove }: Props) {
  return (
    <Pressable
      style={[styles.card, styles.shadowProp]}
      onPress={() => {
        onRemove();
      }}
    >
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
            uri: reward.url,
          }}
          style={styles.image}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginBottom: 20,
    flexDirection: "row",
    borderRadius: 10,
  },

  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
