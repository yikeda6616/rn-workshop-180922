import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/kaiun.png')}
          style={styles.image}
          resizeMode='contain'
        />
        <Text style={styles.text}>Today's Fortune?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 50
  },
  text: {
    fontSize: 40
  }
});
