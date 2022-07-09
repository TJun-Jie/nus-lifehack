import { View, Text, ScrollView, StyleSheet } from "react-native";
import ShopCard from "../../../components/ShopCard";
import { myRewards } from "../../../config/constants";

export default function MyRewards() {
  return (
    <ScrollView style={styles.container}>
      {myRewards.map((reward, index) => (
        <ShopCard key={index} reward={reward} showPoints={false} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 12,
  },
});
