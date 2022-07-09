import { View, Text, ScrollView, StyleSheet } from "react-native";
import ShopCard from "../../../components/ShopCard";
import { useSelector, useDispatch } from "react-redux";
import { Reward } from "../../../config/interfaces";
import { onChangeRewardItems } from "../../../redux/slices/userSlice";

export default function MyRewards() {
  const rewardItems = useSelector((state: AppState) => state.user.rewardItems) as Reward[];
  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      {rewardItems.map((reward, index) => (
        <ShopCard onRemove={() => {}} key={index} reward={reward} showPoints={false} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
});
