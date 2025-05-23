import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';


export default function HomeScreenLayout() {
    return (
        <>
            <StatusBar hidden={true} />
            <View style={styles.container}>
                <WebView
                    source={{ uri: 'https://pervdaniil.github.io/BrainCenterPlatform/' }}
                    style={styles.webview}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    webview: { flex: 1 },
});
