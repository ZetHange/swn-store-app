import React, { useEffect, useRef } from "react";
import { View, StyleSheet, BackHandler, Alert, TextInput } from "react-native";
import { WebView } from "react-native-webview";
import { Appbar, Button } from "react-native-paper";

const page = () => {
  const webViewRef = useRef(null);

  const goback = () => {
    webViewRef.current.goBack();
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      goback
    );

    return () => backHandler.remove();
  }, []);

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
        ref={webViewRef}
        originWhitelist={["http://*", "https://*"]}
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
