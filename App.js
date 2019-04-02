import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  handleOmikuji = () => {
    alert('daikichi!');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/kaiun.png')}
          style={styles.image}
          resizeMode='contain'
        />
        <Text style={styles.text}>Today's Fortune?</Text>
        <Image
          source={require('./assets/daikichi.png')}
          style={styles.resultImage}
          resizeMode='contain'
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.handleOmikuji}
        >
          <Text style={styles.buttonTitle}>Draw a fortune</Text>
        </TouchableOpacity>
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
  },
  resultImage: {
    width: 200,
    height: 300
  },
  buttonContainer: {
    backgroundColor: '#3498db'
  },
  buttonTitle: {
    fontSize: 25,
    color: 'white',
    paddingHorizontal: 40,
    paddingVertical: 10
  }
});
