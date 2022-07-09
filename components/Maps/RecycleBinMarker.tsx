import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Modal,
    TouchableOpacity,
} from "react-native";

interface RecycleBinProps   {
    onCancel: ()=>void,
    visible: boolean,
    locationName: string,
    activityStatus: string,
}

const RecycleBinMarker = ({locationName, activityStatus, visible, onCancel}:RecycleBinProps) => {

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onCancel}
        >
            <TouchableOpacity style={styles.modalContainer} onPress={onCancel}>
                <TouchableOpacity style={styles.modal} activeOpacity={1}>
                    <View style={styles.textContainer} >
                        <Text style={styles.locationName}>Jurong West Street 41, Blk 482</Text>
                        <Text style={styles.text}>Activity status: Active</Text>
                    </View>

                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    modal: {
        width: "100%",
        height: "15%",
        marginTop: "auto",
        justifyContent: "space-evenly",
        backgroundColor: "white",
        borderRadius: 4,
        boxShadow: "5px 5px black",
    },

    text: {
        fontSize: 15,
        fontWeight: "bold",
    },

    textContainer: {
        marginLeft: 20,
        marginTop: 20,
        marginBottom: "auto",
    },

    locationName: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,

    }


});

export default RecycleBinMarker;