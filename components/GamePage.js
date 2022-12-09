import * as React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const page = () => {
  return (
    <View style={styles.container}>
      <WebView originWhitelist={['*']} source={{ uri: "https://swn-store.tk" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f6f4",
    height: "100%",
  },
});

export default page;
