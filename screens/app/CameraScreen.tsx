import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert, Button } from "react-native";
import { Camera, CameraType } from "expo-camera";

export type Props = {};

interface States {
  hasPermissions: boolean;
  cameraType: CameraType;
  error: string;
}

const CameraScreen: React.FC<Props> = () => {
  const [cameraState, setCameraState] = useState<States>({
    hasPermissions: false,
    cameraType: CameraType.back,
    error: "",
  });

  // Function to get camera permissions NOTE
  const getCameraPermissions = () => {
    Camera.requestCameraPermissionsAsync()
      .then((result) => {
        // If not able to get back any response
        if (!result.status || result.status !== "granted") {
          setCameraState((prevState) => {
            return { ...prevState, hasPermissions: false };
          });
        } else {
          setCameraState((prevState) => {
            return { ...prevState, hasPermissions: true };
          });
        }
      })
      .catch((err) => {
        console.log(err);
        // setCameraState(prevState => {
        //     return {...prevState, error: err.message}
        // })
      });
  };

  useEffect(() => {
    getCameraPermissions();
  }, []);

  // Conditional render depending on whether permissions given NOTE
  if (cameraState.hasPermissions === false) {
    return (
      <View style={styles.centred}>
        <Text>Camera Permission not granted</Text>
        <Button title="Get Permissions" onPress={getCameraPermissions} />
      </View>
    );
  }

  return (
    <View style={styles.cameraContainer}>
      <View style={styles.cameraOverlay}>
        <View style={styles.topOverlayContainer}>
          <Text style={styles.scanText}>Scan Item</Text>
        </View>
        <View style={styles.focusContainer}>
          <View style={styles.focusMargin} />
          <View style={styles.focusArea} />
          <View style={styles.focusMargin} />
        </View>
        <View style={styles.bottomOverlayContainer} />
      </View>
      <Camera style={{ flex: 1 }} type={cameraState.cameraType}></Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  centred: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cameraContainer: {
    flex: 1,
  },

  cameraOverlay: {
    position: "absolute",
    flex: 1,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    zIndex: 1,
  },

  topOverlayContainer: {
    height: "30%",
    width: "100%",
    backgroundColor: "black",
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },

  scanText: {
    color: "white",
    fontSize: 30,
  },

  focusContainer: {
    height: "40%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  focusArea: {
    width: "80%",
    height: "100%",
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "dashed",
  },

  focusMargin: {
    width: "10%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.5,
  },

  bottomOverlayContainer: {
    height: "30%",
    width: "100%",
    backgroundColor: "black",
    opacity: 0.5,
  },
});

export default CameraScreen;
