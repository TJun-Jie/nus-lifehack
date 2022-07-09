import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Screens, Colors } from "../../config/constants";

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
      <View style={styles.titleContainer}>
        <Text style={styles.scanResult}>Scan Results</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imgState.imgData }} />
      </View>
      <View style={styles.detailCardContainer}>
        <View
          style={{ ...styles.detailCard, backgroundColor: Colors.LightGreen }}
        >
          <View style={styles.detailCardIcon}>
            <Ionicons
              name="ios-checkmark-sharp"
              size={24}
              color={Colors.DarkGreen}
            />
          </View>
          <View style={styles.detailCardText}>
            <Text>Recyclable</Text>
          </View>
        </View>
      </View>

      <View style={styles.detailCardContainer}>
        <View
          style={{ ...styles.detailCard, backgroundColor: Colors.LightBlue }}
        >
          <View style={styles.detailCardIcon}>
            <Ionicons
              name="md-information-circle-sharp"
              size={24}
              color={Colors.DarkBlue}
            />
          </View>
          <View style={styles.detailCardText}>
            <Text>Plastic</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          props.navigation.popToTop();
          props.navigation.navigate(Screens.Home);
        }}
      >
        <Text>Back to home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centred: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titleContainer: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },

  scanResult: {
    fontSize: 25,
    fontWeight: "bold",
  },

  imageContainer: {
    width: "90%",
    height: "40%",
    marginBottom: "5%",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  detailCardContainer: {
    width: "90%",
    height: "10%",
    alignItems: "center",
    marginBottom: "5%",
  },

  detailCard: {
    width: "100%",
    height: "100%",
    padding: 10,
    flexDirection: "row",
    borderRadius: 20,
  },

  detailCardIcon: {
    width: "10%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  detailCardText: {
    width: "80%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScanDetailsScreen;
