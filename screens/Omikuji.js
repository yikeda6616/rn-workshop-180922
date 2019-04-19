import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import { IMAGE_OPTIONS } from '../constants';
import { postResult } from '../api';

export default class Omikuji extends React.Component {
  state = {
    image: null
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Fortune Draw',
      headerRight: (
        <Button
          onPress={() =>
            navigation.navigate('Result', navigation.getParam('results'))
          }
          title='Results'
          color='black'
        />
      )
    };
  };

  handleOmikuji = () => {
    const index = Math.floor(Math.random() * IMAGE_OPTIONS.length);
    postResult(index, 'yasu');
    this.setState({
      image: IMAGE_OPTIONS[index]
    });
  };

  render() {
    const image = this.state;

    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/kaiun.png')}
          style={styles.image}
          resizeMode='contain'
        />
        <Text style={styles.text}>Today's Fortune?</Text>
        <Image
          source={image.image}
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
    flexDirection: 'column',
    justifyContent: 'space-around'
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
