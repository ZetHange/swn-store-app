import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper'

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/icon.jpg')} />
      <Text style={styles.paragraph}>
        SWN STORE App
      </Text>
      <Card style={styles.card}>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 0 }}>
            Версия: react-native-test
          </Text>
          <Text style={styles.paragraphlite}>
            © Stalker World News 2020-2022.
          </Text>
      </Card>
      <Card style={styles.card}>
        <Text onPress={() => }>Вход в SWN ID</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 4,
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f6f4',
  },
  paragraph: {
    margin: 12,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraphlite: {
    fontSize: 10,
    textAlign: 'center',
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },
});
