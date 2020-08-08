import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export const CreateEmployee = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");
    const [picture, setPicture] = useState("");
    const [modal, setModal] = useState(false);

    const pickFromGallery = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (granted) {
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5
            });
            console.log(data);
        } else {
            Alert.alert("Need Permission to upload Image");
        }
    }

    const pickFromCamera = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA);
        if (granted) {
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5
            });
            console.log(data);
        } else {
            Alert.alert("Need Permission to take Image");
        }
    }

    return (
        <View style={styles.createEmpRoot}>
            <TextInput
                label="Name"
                style={styles.inputStyle}
                theme={theme}
                value={name}
                mode="outlined"
                onChangeText={name => setName(name)}
            />
            <TextInput
                label="Email"
                style={styles.inputStyle}
                theme={theme}
                value={email}
                mode="outlined"
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                label="Phone"
                style={styles.inputStyle}
                theme={theme}
                value={phone}
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={phone => setPhone(phone)}
            />
            <TextInput
                label="Salary"
                style={styles.inputStyle}
                theme={theme}
                value={salary}
                mode="outlined"
                onChangeText={salary => setSalary(salary)}
            />
            <Button
                icon="upload"
                mode="contained"
                theme={theme}
                style={{ margin: 8 }}
                onPress={() => setModal(true)}>
                Upload Photo
            </Button>
            <Button
                icon="content-save"
                mode="contained"
                theme={theme}
                style={styles.saveButton}
                onPress={() => console.log("saved")}>
                Save
            </Button>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    setModal(false)
                }}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button
                            icon="camera"
                            theme={theme}
                            mode="contained"
                            onPress={() => pickFromCamera()}>
                            Camera
                        </Button>
                        <Button
                            icon="image-area"
                            theme={theme}
                            mode="contained"
                            onPress={() => pickFromGallery()}>
                            Gallary
                        </Button>
                    </View>
                    <Button
                        theme={theme}
                        onPress={() => setModal(false)}>
                        Cancel
                    </Button>
                </View>
            </Modal>
        </View>
    )
}

const theme = {
    colors: {
        primary: "#00aaff"
    }
}

const styles = StyleSheet.create({
    createEmpRoot: {
        flex: 1
    },
    inputStyle: {
        margin: 8
    },
    modalView: {
        position: "absolute",
        bottom: 2,
        width: "100%",
        backgroundColor: "#fff"
    },
    modalButtonView: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
    saveButton: {
        marginTop: 10,
        margin: 8
    }
});