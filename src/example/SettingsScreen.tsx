import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const SettingsScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: "#AAAAAA", true: "#389CFF" }}
                thumbColor={ isEnabled ? "#F5DD4B" : "#F4F3F4" }
                ios_backgroundColor={"#3E3E3E"}
                onValueChange={toggleSwitch}
                value={isEnabled}/>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default SettingsScreen;
