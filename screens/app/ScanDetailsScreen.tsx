import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export type Props = {};

interface States {
  imgData: string;
}

const ScanDetailsScreen: React.FC<Props> = (props: any) => {
  const [imgState, setImgState] = useState<States>({
    imgData: props.route.params.imgSource,
  });

  return (
    <View style={styles.centred}>
      <Image style={styles.image} source={{ uri: imgState.imgData }} />
      <Text>Scan Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centred: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "30%",
  },
});

export default ScanDetailsScreen;
