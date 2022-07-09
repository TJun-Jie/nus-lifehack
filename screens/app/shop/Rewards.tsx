import { View, Text, Image, StyleSheet } from "react-native";

const rewards = [
  {
    title: "Grab Voucher",
    description: "A grab voucher that allows you to buy stuff",
    points: 100,
  },
  {
    title: "Grab Voucher",
    description: "A grab voucher that allows you to buy stuff",
    points: 50,
  },
  {
    title: "Grab Voucher",
    description: "A grab voucher that allows you to buy stuff",
    points: 100,
  },
];

export default function Rewards() {
  return (
    <View style={styles.container}>
      {rewards.map((reward, index) => (
        <View style={styles.card}>
          <View style={styles.left}>
            <View style={styles.leftTop}>
              <Text style={styles.title}>{reward.title}</Text>
              <Text style={styles.description}>{reward.description}</Text>
            </View>
            <Text style={styles.leftBottom}>{reward.points} points</Text>
          </View>
          <View style={styles.image}>Image</View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  card: {},

  left: {},

  leftTop: {},

  title: {},

  description: {},

  leftBottom: {},

  image: {},
});
