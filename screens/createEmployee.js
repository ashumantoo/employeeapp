import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import axios from 'axios';

export const CreateEmployee = (props) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");
    const [picture, setPicture] = useState("");
    const [position, setPosition] = useState("");
    const [modal, setModal] = useState(false);

    const createEmployee = () => {
        const createEmpData = {
            name,
            phone,
            email,
            salary,
            position,
            picture
        }
        axios.post("http://10.0.2.2:3000/employees", createEmpData)
            .then(response => {
                console.log(response.data);
                props.navigation.navigate("home");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const pickFromGallery = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (granted) {
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5
            });
            if (!data.cancelled) {
                let newFile = {
                    uri: data.uri,
                    type: `profile/${data.uri.split(".")[1]}`,
                    name: `profile.${data.uri.split(".")[1]}`
                }
                handlerUpload(newFile);
            }
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
            if (!data.cancelled) {
                let newFile = {
                    uri: data.uri,
                    type: `profile/${data.uri.split(".")[1]}`,
                    name: `profile.${data.uri.split(".")[1]}`
                }
                handlerUpload(newFile);
            }
        } else {
            Alert.alert("Need Permission to take Image");
        }
    }

    const handlerUpload = (image) => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'employeeApp');
        data.append('cloud_name', 'ashumantoo');

        fetch("https://api.cloudinary.com/v1_1/ashumantoo/image/upload",
            {
                method: "post",
                body: data
            }).then(res => res.json())
            .then(data => {
                setPicture(data.url);
                setModal(false);
            }).catch(error => {
                if (error) {
                    throw new Error("Error While uploading image");
                }
            });
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
                label="Position"
                style={styles.inputStyle}
                theme={theme}
                value={position}
                mode="outlined"
                onChangeText={position => setPosition(position)}
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
                icon={picture === "" ? "upload" : "check-bold"}
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
                onPress={createEmployee}>
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