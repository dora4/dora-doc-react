import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStaticNavigation, NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const RootStack = createBottomTabNavigator({
    initialRouteName: 'MainScreen',
    screens: {
        Home: HomeScreen,
        Settings: SettingsScreen,
    },
});

const Navigation = createStaticNavigation(RootStack);

export default function MainScreen() {
    return (
        <Navigation/>
    );
}
