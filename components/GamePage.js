import * as React from "react";
import { View, StyleSheet, BackHandler } from "react-native";
import { WebView } from "react-native-webview";
import { Appbar } from "react-native-paper";

const page = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header
        style={[
          {
            height: 0,
            backgroundColor: "#fff",
          },
        ]}
      />
      <WebView
        originWhitelist={["*"]}
        source={{ uri: "http://swn-store.tk" }}
      />
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
