import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import RecycleBinMarker from '../../components/Maps/RecycleBinMarker'
import { firestore} from "../../config/firebase";
import {collection, doc, setDoc, getDocs, addDoc} from "firebase/firestore";
import {BinsDoc} from "../../config/interfaces";

const GOOGLE_MAPS_APIKEY = "AIzaSyArgxVSiDVmM1YqIzX2OwuVPxiijlVsROc";



const data = {
    Route: {
        startTime: "Tue Jun 15 2021 10:47:27 GMT+0800",
        endTime: "Tue Jun 15 2021 10:47:27 GMT+0800",
        totalDistance: "2.42",
        pace: "5:30",
        title: "Monday Morning Run",
        crowdLevel: "High",
        dangers: "NIL",
        remarks: "very good",
        coordinates: [
            {
                latitude: 1.3584168333017268,
                longitude: 103.70746290442666,
                danger: "High Crowd Levels",
                time: "15 June 3PM",
            },
            {
                latitude: 1.3500577333970956,
                longitude: 103.72828007393781,
                danger: "Road Works",
                time: "15 June 8PM",
            },
            {
                latitude: 1.3316125813561035,
                longitude: 103.72105779063803,
                danger: "Unsuitable For Running",
                time: "15 June 8PM",
            },
        ],
    },
};

const origin = { latitude: 1.3584168333017268, longitude: 103.70746290442666 };

interface binState {
    bins: BinsDoc[];
}

function MapComponent() {
    const [bins, setBins] = useState<BinsDoc[]>([])
    const cancelInModalMode = () => setInModalMode(false);
    const [inModalMode, setInModalMode] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(0);

    const manageModal = (i: number) => {
        setSelectedMarker(i);
        setInModalMode(true);
    };


    useEffect( () => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(firestore, "bins"));
            querySnapshot.forEach((item) => {
                // doc.data() is never undefined for query doc snapshots
                const newBin = item.data() as BinsDoc;
                setBins([...bins, newBin])

            })


        }



        fetchData().catch(e => console.log(e));



    }, [bins]);

    const [markers, setMarkers] = useState(data.Route.coordinates);
    const renderedMarker = [];
    if (markers.length > 0) {
        for (let i = 0; i < markers.length; i++) {
            renderedMarker.push(
                <Marker
                    key={i}
                    coordinate={markers[i]}
                    onPress={() => {
                        manageModal(i);
                    }}
                ></Marker>
            );
        }

    }
    const newStyle = StyleSheet.flatten([
        // styles.container,
        { width: Dimensions.get("window").width  },
        { height: Dimensions.get("window").height },
    ]);

    return (
        <View>
            <MapView
                style={newStyle}
                initialRegion={{
                    latitude: 1.3584168333017268,
                    longitude: 103.70746290442666,
                    latitudeDelta: 0.08,
                    longitudeDelta: 0.08,
                }}
            >
                {/* <Marker coordinate={origin} onPress={() => setInModalMode(true)} /> */}
                {renderedMarker}
            </MapView>

            <RecycleBinMarker
                // text={data.Route.coordinates[selectedMarker].danger}
                locationName="test"
                activityStatus="active"
                visible={inModalMode}
                onCancel={cancelInModalMode}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height * 0.6,
    },
});

export default MapComponent;