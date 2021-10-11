import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    ScrollView,
    FlatList
} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    }
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function DetailScreen({ navigation }) {

    const [selectedIndex, setSelectedIndex] = useState();

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    const createThreeButtonAlert = () =>
        Alert.alert(
            "Diğer İşlemler",
            "",
            [
                {
                    text: "Test Raporu",
                    onPress: () => console.log("Ask me later pressed")
                },
                {
                    text: "Cevap Anahtarı",
                    onPress: () => console.log("Ask me later pressed")
                },
                {
                    text: "Vazgeç",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                }
            ]
        );



    return (
        <View style={styles.container}>
            <View style={headerStyles.headerView1}>
                <View style={headerStyles.headerViewCells}>
                    <View style={headerStyles.headerViewCellsHeader}>
                        <Text style={headerStyles.headerViewCellsHeaderText}>Başlangıç Tarihi</Text>
                    </View>
                    <View style={headerStyles.headerViewCellsHeader2}>
                        <Text style={headerStyles.headerViewCellsHeaderText2}>01-06-2021</Text>
                    </View>
                </View>
                <View style={headerStyles.headerViewCells}>
                    <View style={headerStyles.headerViewCellsHeader}>
                        <Text style={headerStyles.headerViewCellsHeaderText}>Programın Günü</Text>
                    </View>
                    <View style={headerStyles.headerViewCellsHeader2}>
                        <Text style={headerStyles.headerViewCellsHeaderText2}>133</Text>
                    </View>
                </View>

            </View>
            <View style={headerStyles.headerView2}>
                <View style={headerStyles.headerViewCells}>
                    <View style={headerStyles.headerViewCellsHeader}>
                        <Text style={headerStyles.headerViewCellsHeaderText}>Tamamladığın Gün</Text>
                    </View>
                    <View style={headerStyles.headerViewCellsHeader2}>
                        <Text style={headerStyles.headerViewCellsHeaderText2}>0</Text>
                    </View>
                </View>
                <View style={headerStyles.headerViewCells}>
                    <View style={headerStyles.headerViewCellsHeader}>
                        <Text style={headerStyles.headerViewCellsHeaderText}>Durumun</Text>
                    </View>
                    <View style={headerStyles.headerViewCellsHeader2}>
                        <Text style={{ fontSize: 18, textAlign: "center", fontWeight: "bold", marginHorizontal: 20 }} >Programın 132 gün gerisindesin</Text>
                    </View>
                </View>
            </View>
            <View style={contentStyles.contentView}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold"
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 15,
        margin: 10,
        borderRadius: 15
    },
});
const headerStyles = StyleSheet.create({
    headerView1: {
        height: "20%",
        width: "100%",
        backgroundColor: "brown",
        flexDirection: "row"
    },
    headerView2: {
        height: "20%",
        width: "100%",
        backgroundColor: "brown",
        flexDirection: "row"
    },
    headerViewCells: {
        backgroundColor: "aqua",
        flex: 1,
        margin: 10,
        borderRadius: 10
    },
    headerViewCellsHeader: {
        backgroundColor: "lime",
        height: "25%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    headerViewCellsHeader2: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "aqua",
        flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    headerViewCellsHeaderText: {
        fontSize: 15,
        fontWeight: "bold"
    },
    headerViewCellsHeaderText2: {
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center"
    }
});
const contentStyles = StyleSheet.create({
    contentView: {
        backgroundColor: 'blue',
        width: "100%",
        height: "60%"
    },
});