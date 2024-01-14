import * as React from 'react';
import {View, Text, Button, TouchableOpacity, ScrollView, StyleSheet, ImageBackground} from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FAQ from "./FAQ";
import FAQDora from "./FAQDora";
import FAQDoraCache from "./FAQDoraCache";
import FAQDoraView from "./FAQDoraView";
import { WalletPicker } from "./WalletPicker";
import { useNavigation } from '@react-navigation/native';

function MenuScreen() {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#f0f8ff' }}>
        <ScrollView showsVerticalScrollIndicator={ false }>

            <TouchableOpacity
                style={styles.touchRegion}
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
                style={styles.touchRegion2}
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
                style={styles.touchRegion3}
                onPress={()=>{
                    navigation.navigate("DoraView")
                }}>
                <ImageBackground
                    source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
                    style={{width: 150, height: 150}}>
                    <Text style={styles.button}>FAQ(Dora View)</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.touchRegion4}
                onPress={()=>{
                    navigation.navigate("WalletPicker")
                }}>
                <ImageBackground
                    source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}}
                    style={{width: 150, height: 150}}>
                    <Text style={styles.button}>Donate</Text>
                </ImageBackground>
            </TouchableOpacity>
        </ScrollView>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
    initialRouteName: 'HomePage',
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

export default function Main() {
  return <Navigation />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    touchRegion: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee8aa",
        padding: 10,
        marginTop: 20,
        borderRadius: 4
    },
    touchRegion2: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7fffd4",
        padding: 10,
        marginTop: 20,
        borderRadius: 4
    },
    touchRegion3: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff7f50",
        padding: 10,
        marginTop: 20,
        borderRadius: 4
    },
    touchRegion4: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#389cff",
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
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
