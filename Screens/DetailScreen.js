import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Table, TableWrapper, Row } from 'react-native-table-component';

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



    const state = {
        tableHead: ['#', 'Ders', 'Kitap', 'Bölüm', 'Konu', 'İşlemler'],
        widthArr: [120, 150, 120, 120, 150, 100],
        dataTable: [
            ['1 - Konu Testi', 'MATEMATİK', 'AYT MATEMATİK', '001 - MANTIK', '001 - Önermeler'],
            ['2 - Konu Testi', 'MATEMATİK', 'AYT MATEMATİK', '001 - MANTIK', '002 - Veya, Ve, Ya Da Bağlaçlı Bileşik Önermeler'],
            ['1 - Konu Testi', 'MATEMATİK', 'AYT MATEMATİK', '001 - MANTIK', '001 - Önermeler'],
            ['a', 'b', 'c', 'd', 'e'],
            ['1 - Konu Testi', 'MATEMATİK', 'AYT MATEMATİK', '001 - MANTIK', '001 - Önermeler'],
            ['2 - Konu Testi', 'MATEMATİK', 'AYT MATEMATİK', '001 - MANTIK', '002 - Veya, Ve, Ya Da Bağlaçlı Bileşik Önermeler'],
            ['1 - Konu Testi', 'MATEMATİK', 'AYT MATEMATİK', '001 - MANTIK', '001 - Önermeler'],
            ['a', 'b', 'c', 'd', 'e'],
            ['1 - Konu Testi', 'MATEMATİK', 'AYT MATEMATİK', '001 - MANTIK', '001 - Önermeler']
        ]
    };


    const [selectedIndex, setSelectedIndex] = useState();

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    const element = (data, index) => (
        <TouchableOpacity onPress={() => this._alertIndex(index)}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>button</Text>
            </View>
        </TouchableOpacity>
    );

    const tableData = [];

    for (let i = 0; i < 15; i += 1) {
        const rowData = [];
        for (let j = 0; j < 15; j += 1) {
            rowData.push(state.dataTable[i]);
        }
        tableData.push(rowData);
    }


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
                <ScrollView horizontal={true}>
                    <View>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                                {
                                    tableData.map((rowData, index) => (
                                        <Row
                                            key={index}
                                            data={rowData}
                                            widthArr={state.widthArr}
                                            style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                                            textStyle={styles.text}
                                        />
                                    ))
                                }
                            </Table>
                        </ScrollView>
                    </View>
                </ScrollView>
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
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
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
        borderRadius: 7
    },
    headerViewCellsHeader: {
        backgroundColor: "lime",
        height: "25%",
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
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