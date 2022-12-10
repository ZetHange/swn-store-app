import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UserScreen from "./about/license";
import LoginScreen from "./about/login";
import PoliticaScreen from "./about/politica";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/icon.jpg")} />
      <Text style={styles.paragraph}>SWN STORE App</Text>
      <Card style={styles.cardButton}>
        <Text style={{ fontWeight: "bold", textAlign: "center", margin: 0 }}>
          Версия: β 0.0.7.2
        </Text>
        <Text style={{ textAlign: "center", marginTop: 0, fontSize: 10 }}>
          От 10 декабря 2022
        </Text>
      </Card>
      <Card style={styles.cardButton} onPress={() => navigation.navigate('Вход в SWN ID')}>
        <Text style={{ fontWeight: "400" }}>Вход в SWN ID</Text>
      </Card>
      <Card style={styles.cardButton} onPress={() => navigation.navigate('Политика конфидециальности')}>
        <Text style={{ fontWeight: "400" }}>Политика конфидециальности</Text>
      </Card>
      <Card style={styles.cardButton} onPress={() => navigation.navigate('Пользовательское соглашение')}>
        <Text style={{ fontWeight: "400" }}>Пользовательское соглашение</Text>
      </Card>
      <Text style={styles.paragraphlite}>© Stalker World News 2020-2022.</Text>
    </View>
  );
}

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Настройки" component={HomeScreen} />
        <Stack.Screen name="Вход в SWN ID" component={LoginScreen} />
        <Stack.Screen name="Политика конфидециальности" component={PoliticaScreen} />
        <Stack.Screen name="Пользовательское соглашение" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  cardButton: {
    padding: 10,
    backgroundColor: "#f2f2f2",
    marginBottom: 4,
    width: 250,
    alignItems: "center",
    shadowColor: "#f2f2f2",
  },
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  paragraph: {
    margin: 12,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  paragraphlite: {
    fontSize: 11,
    textAlign: "center",
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },
});

export default app;