import {StyleSheet, SafeAreaView, ScrollView, RefreshControl} from "react-native";
import Constants from 'expo-constants';
import * as React from "react";

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    });
}

const RefreshControlExample = () => {
    const [refreshing, setRefreshing] = React.useState(false)
    const onRefresh = React.useCallback(()=> {
        setRefreshing(true)
        wait(2000).then(()=> {
            setRefreshing(false)
        });
    }, [])
    return (<SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollView}
                    refreshControl={<RefreshControl refreshing={refreshing}
                                                    onRefresh={onRefresh}></RefreshControl>}
        ></ScrollView>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RefreshControlExample;
