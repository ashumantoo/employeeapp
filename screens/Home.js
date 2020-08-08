import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

export const Home = (props) => {

    const employeeDataList = [
        { id: '1', name: "Ashutosh", position: "Fullstack Developer", imageUri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" },
        { id: '2', name: "Mukesh", position: "Android Developer", imageUri: "https://images.unsplash.com/photo-1547624643-3bf761b09502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" },
        { id: '3', name: "Rohit", position: "React Developer", imageUri: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" },
        { id: '4', name: "Vikash", position: "Team Lead", imageUri: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" },
        // { id: 5, name: "Aakash", position: "Backend Developer", imageUri: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80" },
        // { id: 6, name: "Ashutosh", position: "Fullstack Developer", imageUri: "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" },
        // { id: 7, name: "Mukesh", position: "Android Developer", imageUri: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=651&q=80" },
        // { id: 8, name: "Rohit", position: "React Developer", imageUri: "https://images.unsplash.com/photo-1504933350103-e840ede978d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80" },
        // { id: 9, name: "Vikash", position: "Team Lead", imageUri: "https://images.unsplash.com/photo-1489779162738-f81aed9b0a25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1082&q=80" },
        // { id: 10, name: "Aakash", position: "Backend Developer", imageUri: "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&auto=format&fit=crop&w=642&q=80" }
    ];

    const renderEmployeeView = ((item) => {
        return (
            <Card style={styles.homeCard} onPress={() => props.navigation.navigate("Profile", { employeeData: item })}>
                <View style={styles.cardview}>
                    <Image
                        style={styles.homeImage}
                        source={{ uri: item.imageUri }}
                    />
                    <View style={styles.textview}>
                        <Text style={styles.homeCardText}>{item.name}</Text>
                        <Text style={{ marginLeft: 8 }}>{item.position}</Text>
                    </View>
                </View>
            </Card>
        )
    })

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={employeeDataList}
                renderItem={({ item }) => {
                    return renderEmployeeView(item)
                }}
                keyExtractor={item => item.id}
            />
            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{ colors: { accent: "#00aaff" } }}
                onPress={() => props.navigation.navigate('Create')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    homeCard: {
        marginTop: 5,
        padding: 5,
    },
    homeCardText: {
        fontSize: 18,
        padding: 6
    },
    homeImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    cardview: {
        flexDirection: "row",
        padding: 6
    },
    textview: {
        marginLeft: 8
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})