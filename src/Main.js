import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Tutorial from './Tutorial';

function DetailScreen() {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
    </View>
  );
}
const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screens: {
      Home: Tutorial,
      Details: DetailScreen,
    },
  });

const Navigation = createStaticNavigation(RootStack);

export default function Main() {
  return <Navigation />;
}
