import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://pervdaniil.github.io/BrainCenterPlatform/' }} 
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
