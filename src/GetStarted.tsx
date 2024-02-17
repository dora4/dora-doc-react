import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView, StyleSheet, ImageBackground, Alert} from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FAQ from "./faq/FAQ";
import FAQDora from "./faq/FAQDora";
import FAQDoraCache from "./faq/FAQDoraCache";
import FAQDoraView from "./faq/FAQDoraView";
import { WalletPicker } from "./example/WalletPicker";
import { useNavigation } from '@react-navigation/native';

function MenuScreen() {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#f0f8ff' }}>
        <ScrollView showsVerticalScrollIndicator={ false }>
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.touchRegion, {backgroundColor:'#eee8aa'}]}
                    onPress={()=>{
                        navigation.navigate("Dora")
                    }}>
                    <ImageBackground
                        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
                        style={{width: 150, height: 150}}>
                        <Text style={styles.button}>FAQ(Dora)</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchRegion, {backgroundColor:'#ff7f50'}]}
                    onPress={()=>{
                        navigation.navigate("DoraCache")
                    }}>
                    <ImageBackground
                        source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}}
                        style={{width: 150, height: 150}}>
                        <Text style={styles.button}>FAQ(Dora Cache)</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchRegion, {backgroundColor:'#7fffd4'}]}
                    onPress={()=>{
                        navigation.navigate("DoraView")
                    }}>
                    <ImageBackground
                        source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}}
                        style={{width: 150, height: 150}}>
                        <Text style={styles.button}>FAQ(Dora View)</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchRegion, {backgroundColor:'#389cff'}]}
                    onPress={()=>{
                        Alert.alert("捐款功能施工中");
                        // navigation.navigate("WalletPicker")
                    }}>
                    <ImageBackground
                        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
                        style={{width: 150, height: 150}}>
                        <Text style={styles.button}>Donate</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
    initialRouteName: 'MainScreen',
    screens: {
        Home: FAQ,
        Menu: MenuScreen,
        Dora: FAQDora,
        DoraCache: FAQDoraCache,
        DoraView: FAQDoraView,
        WalletPicker: WalletPicker
    }
});

const Navigation = createStaticNavigation(RootStack);

export default function GetStarted() {
  return <Navigation />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: 'wrap'
    },
    touchRegion: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 20,
        borderRadius: 4
    },
    button: {
        width: 150,
        height: 150,
        alignItems: "center",
        color: "#FFFFFF",
        padding: 5,
        borderRadius: 4
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});
