import { useState } from "react";
import { useWindowDimensions, Text, SafeAreaView, StyleSheet } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import Shop from "./Shop";
import MyRewards from "./MyRewards";

const renderScene = SceneMap({
  first: Shop,
  second: MyRewards,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Shop" },
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
