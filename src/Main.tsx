import * as React from 'react';
import {View, Button} from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FAQ from "./FAQ";
import FAQDora from "./FAQDora";
import FAQDoraCache from "./FAQDoraCache";
import FAQDoraView from "./FAQDoraView";
import type {PropsWithChildren} from 'react';
import { useNavigation } from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
    title: string;
}>;


function MenuScreen() {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
            onPress={() => {
                navigation.navigate("Dora")
            }}
            title="FAQ(Dora)"
        />
        <Button
            onPress={() => {
                navigation.navigate("DoraCache")
            }}
            title="FAQ(Dora Cache)"
        />
        <Button
            onPress={() => {
                navigation.navigate("DoraView")
            }}
            title="FAQ(Dora View)"
        />
    </View>
  );
}

const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screens: {
      Home: FAQ,
        Menu: MenuScreen,
        Dora: FAQDora,
        DoraCache: FAQDoraCache,
        DoraView: FAQDoraView
    }
});

const Navigation = createStaticNavigation(RootStack);

export default function Main() {
  return <Navigation />;
}
