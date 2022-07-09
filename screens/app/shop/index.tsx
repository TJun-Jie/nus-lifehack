import { useState } from "react";
import { useWindowDimensions, Text, SafeAreaView, StyleSheet } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import Rewards from "./Rewards";
import Vouchers from "./Vouchers";

const renderScene = SceneMap({
  first: Rewards,
  second: Vouchers,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Vouchers" },
    { key: "second", title: "My Rewards" },
  ]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
