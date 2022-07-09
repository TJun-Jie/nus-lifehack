import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

import { Screens, Colors } from "../../config/constants";

export type Props = {};

interface States {
  hasPermissions: boolean;
  camera: Camera | null;
  cameraType: CameraType;
  capturedImage: any;
  error: string;
}

const CameraScreen: React.FC<Props> = (props: any) => {
  const cameraRef = useRef(null);
  const [cameraState, setCameraState] = useState<States>({
    hasPermissions: false,
    camera: null,
    cameraType: CameraType.back,
    capturedImage: null,
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

  // Get camera permissions on first render NOTE
  useEffect(() => {
    getCameraPermissions();
  }, []);

  // Update camera state whenever cameraRef.current changes NOTE
  useEffect(() => {
    console.log(cameraRef.current);
    setCameraState((prevState) => {
      return { ...prevState, camera: cameraRef.current };
    });
  }, [cameraRef.current]);

  // Take screenshot when click on scan NOTE
  const onScanHandler = () => {
    if (cameraState.camera) {
      cameraState.camera
        .takePictureAsync()
        .then((img) => {
          console.log(img);
          props.navigation.navigate(Screens.ScanDetail, {
            imgSource: cameraState.capturedImage.uri,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
        <View style={styles.goBackContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              props.navigation.navigate(Screens.Home);
            }}
          >
            <Ionicons name="arrow-back-outline" size={36} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.topOverlayContainer}>
          <Text style={styles.scanText}>Scan Item</Text>
        </View>

        <View style={styles.focusContainer}>
          <View style={styles.focusMargin} />
          <View style={styles.focusArea} />
          <View style={styles.focusMargin} />
        </View>

        <View style={styles.bottomOverlayContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.submitButtonContainer}
            onPress={onScanHandler}
          >
            <Text style={{ color: "white" }}>Scan</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Camera
        style={{ flex: 1 }}
        type={cameraState.cameraType}
        ref={cameraRef}
      />
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

  goBackContainer: {
    height: "10%",
    width: "100%",
    padding: 10,
    justifyContent: "flex-end",
    backgroundColor: "black",
    opacity: 0.5,
  },

  topOverlayContainer: {
    height: "20%",
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
    justifyContent: "center",
    alignItems: "center",
  },

  submitButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#407056",
    width: "70%",
    height: "20%",
  },
});

export default CameraScreen;
