import { Alert, StyleSheet, ScrollView, View, Text } from "react-native";
import ShopCard from "../../../components/ShopCard";
import { Colors } from "../../../config/constants";
import { useDispatch, useSelector } from "react-redux";
import { onChangeRewardItems, onChangeShopItems } from "../../../redux/slices/userSlice";
import { Reward } from "../../../config/interfaces";

export default function Shop() {
  const dispatch = useDispatch();
  const shopItems = useSelector((state: AppState) => state.user.shopItems) as Reward[];
  const rewardItems = useSelector((state: AppState) => state.user.rewardItems) as Reward[];

  const removeHandler = (removingIndex: number) => {
    const newShopItems = shopItems.filter((_, index) => index !== removingIndex);
    const item = shopItems[removingIndex];
    const newRewardItems = [...rewardItems, item];

    dispatch(onChangeShopItems(newShopItems));
    dispatch(onChangeRewardItems(newRewardItems));
  };

  const onRemove = (removingIndex: number) => {
    Alert.alert("Confirm Purchase", "", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      { text: "Yes", onPress: () => removeHandler(removingIndex) },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.cardContainer}>
        <View>
          {shopItems.map((reward, index) => (
            <ShopCard onRemove={() => onRemove(index)} key={index} reward={reward} showPoints />
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
    paddingTop: 10,
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
