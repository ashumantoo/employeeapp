import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';

export const Profile = (props) => {
    const openDial = () => {
        if (Platform.OS === "android") {
            Linking.openURL("tel:909090909090");
        } else {
            Linking.openURL("telprompt:9090909090");
        }
    };
    return (
        <View style={styles.profileRoot}>
            <LinearGradient
                colors={["#0033ff", "#6bc1ff"]}
                style={{ height: "20%" }}
            />
            <View style={{ alignItems: "center" }}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: "https://images.indianexpress.com/2018/08/james-anderson-fb.jpg" }}
                />
            </View>
            <View style={{ alignItems: "center", margin: 10 }}>
                <Title>James Anderson</Title>
                <Text style={{ fontSize: 18 }}>Cricket Player</Text>
            </View>
            <Card style={styles.profileCard} onPress={() => {
                Linking.openURL("mailto:james@anderson.com")
            }}>
                <View style={styles.cardContent}>
                    <MaterialIcons style={{ paddingTop: 5, marginLeft: 5 }} name="email" size={26} color="#3897f5" />
                    <Text style={styles.CardText}>james@anderson.com</Text>
                </View>
            </Card>
            <Card style={styles.profileCard} onPress={openDial}>
                <View style={styles.cardContent}>
                    <Entypo style={{ paddingTop: 5, marginLeft: 5 }} name="phone" size={26} color="#3897f5" />
                    <Text style={styles.CardText}>9999900889</Text>
                </View>
            </Card>
            <Card style={styles.profileCard}>
                <View style={styles.cardContent}>
                    <FontAwesome style={{ paddingTop: 5, marginLeft: 5 }} name="money" size={26} color="#3897f5" />
                    <Text style={styles.CardText}>9 Lac /Year</Text>
                </View>
            </Card>
            <View style={styles.profileActionButton}>
                <Button
                    icon="account-edit"
                    theme={theme}
                    mode="contained"
                    onPress={() => console.log('Clicked')}>
                    Edit
                </Button>
                <Button
                    icon="delete-circle-outline"
                    theme={theme}
                    mode="contained"
                    onPress={() => console.log("pressed")}>
                    Delete
                </Button>
            </View>
        </View>
    )
}

const theme = {
    colors: {
        primary: "#00aaff"
    }
}

const styles = StyleSheet.create({
    profileRoot: {
        flex: 1
    },
    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 140 / 2,
        marginTop: -50
    },
    profileCard: {
        margin: 3
    },
    cardContent: {
        flexDirection: "row",
        padding: 5
    },
    CardText: {
        padding: 3,
        fontSize: 18,
        marginLeft: 6
    },
    profileActionButton: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 15
    }
})