import { useEffect, useState } from "react";
import { useWindowDimensions, Text, SafeAreaView, StyleSheet } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import Shop from "./Shop";
import MyRewards from "./MyRewards";

const renderScene = SceneMap({
  first: Shop,
  second: MyRewards,
});

const routesObj = [
  { key: "first", title: "Shop" },
  { key: "second", title: "My Rewards" },
];

export default function TabViewExample(props: any) {
  const layout = useWindowDimensions();
  const initialIndex = routesObj.findIndex((obj) => obj.title === props?.route?.params?.tab);
  const [index, setIndex] = useState(0);
  const [routes] = useState(routesObj);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

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
