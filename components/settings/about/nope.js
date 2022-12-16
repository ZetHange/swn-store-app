import * as React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <WebView originWhitelist={['*']} source={{ uri: "https://swn-store.tk/docs/about-copyright-protection" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f6f4",
    height: "100%",
  },
});