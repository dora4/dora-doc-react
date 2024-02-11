import {ActivityIndicator, StyleSheet, View} from "react-native";
import * as React from "react";

const ActivityIndicatorExample = () => (
    <View style = {[styles.container, styles.horizontal]}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" />
        <ActivityIndicator size="large" color="389cff" />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default ActivityIndicatorExample;
