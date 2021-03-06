import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    ScrollView,
    Pressable
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useState } from 'react';


export default function MainScreen({ navigation }) {

    const [selectedIndex, setSelectedIndex] = useState();

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

    const sendNavigation = () =>

        navigation.navigate('DetailScreen', { Item: 'data' });


    return (
        <View style={styles.container}>
            <ScrollView style={{ backgroundColor: "gray", width: "100%" }}>
                <View style={headerStyle.headerView}>

                    <Pressable style={headerStyle.headerViewView} onPress={sendNavigation}>
                        <View style={contentStyle.contentViewCellsHeader}>
                            <Text style={contentStyle.contentViewCellsHeaderText}>ScoreBoard</Text>
                        </View>
                        <Grid>
                            <Row style={{ backgroundColor: "black" }}>
                                <Col style={{ backgroundColor: "pink", justifyContent: "center" }}>
                                    <Text style={{ textAlign: "center" }}>#</Text>
                                </Col>
                                <Col style={{ backgroundColor: "coral", justifyContent: "center" }}>
                                    <Text style={{ textAlign: "center" }}>Tüm Katılımcılar</Text>
                                </Col>
                                <Col style={{ backgroundColor: "aquamarine", justifyContent: "center" }}>
                                    <Text style={{ textAlign: "center" }}>Sen Nerdesin?</Text>
                                </Col>
                            </Row>
                            <Row style={{ backgroundColor: "gray" }}>
                                <Col style={{ backgroundColor: "darkgreen" }}></Col>
                                <Col style={{ backgroundColor: "darkorchid" }}></Col>
                                <Col style={{ backgroundColor: "darkslateblue" }}></Col>
                            </Row>
                            <Row style={{ backgroundColor: "brown" }}>
                                <Col style={{ backgroundColor: "darksalmon" }}></Col>
                                <Col style={{ backgroundColor: "gold" }}></Col>
                                <Col style={{ backgroundColor: "orangered" }}></Col>
                            </Row>
                            <Row style={{ backgroundColor: "gray" }}>
                                <Col style={{ backgroundColor: "darkgreen" }}></Col>
                                <Col style={{ backgroundColor: "darkorchid" }}></Col>
                                <Col style={{ backgroundColor: "darkslateblue" }}></Col>
                            </Row>
                        </Grid>
                    </Pressable>
                </View>
                <View style={contentStyle.contentView1}>

                    <View style={contentStyle.contentViewCellsWidth} >
                        <View style={contentStyle.contentViewCellsHeader}>
                            <Text style={contentStyle.contentViewCellsHeaderText}>Seçenek 2</Text>
                        </View>
                    </View>
                </View>
                <View style={contentStyle.contentView2}>
                    <View style={contentStyle.contentViewCells} >
                        <View style={contentStyle.contentViewCellsHeader}>
                            <Text style={contentStyle.contentViewCellsHeaderText}>Seçenek 3</Text>
                        </View>
                    </View>
                    <View style={contentStyle.contentViewCells}>
                        <View style={contentStyle.contentViewCellsHeader}>
                            <Text style={contentStyle.contentViewCellsHeaderText}>Seçenek 4</Text>
                        </View>
                    </View>
                </View>
                <View style={contentStyle.contentView3}>
                    <View style={contentStyle.contentViewCellsWidth} >
                        <View style={contentStyle.contentViewCellsHeader}>
                            <Text style={contentStyle.contentViewCellsHeaderText}>Seçenek 5</Text>
                        </View>
                    </View>

                </View>
                <View style={footerStyle.footerView}>
                    <View style={footerStyle.footerViewView}></View>
                </View>
            </ScrollView>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const headerStyle = StyleSheet.create({
    headerView: {
        backgroundColor: "blue",
        width: "100%",
        height: 200
    },
    headerViewView: {
        backgroundColor: "aqua",
        flex: 1,
        margin: 10,
        borderRadius: 7
    }
});

const contentStyle = StyleSheet.create({
    contentRow: {
        height: "100%",
        backgroundColor: "coral"
    },
    contentView1: {
        backgroundColor: "brown",
        width: "100%",
        height: 200,
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    contentView2: {
        backgroundColor: "brown",
        width: "100%",
        height: 200,
        flexDirection: "row"
    },
    contentView3: {
        backgroundColor: "brown",
        width: "100%",
        height: 200,
        flexDirection: "row",
        justifyContent: "flex-end"

    },
    contentViewCells: {
        backgroundColor: "cyan",
        height: 180,
        borderRadius: 7,
        margin: 10,
        flex: 1
    },
    contentViewCellsWidth: {
        backgroundColor: "cyan",
        height: 180,
        borderRadius: 7,
        margin: 10
        , width: "45%"
    },
    contentViewCellsHeader: {
        backgroundColor: "deeppink",
        height: "25%",
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        alignItems: "center",
        justifyContent: "center"
    },
    contentViewCellsHeaderText: {
        fontSize: 25,
        fontWeight: "bold"
    }
});

const footerStyle = StyleSheet.create({
    footerView: {
        backgroundColor: "pink",
        width: "100%",
        height: 200,
        flex: 1
    },
    footerViewView: {
        backgroundColor: "aqua",
        flex: 1,
        margin: 10,
        borderRadius: 15
    }
});