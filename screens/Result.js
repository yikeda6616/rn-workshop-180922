import React from 'react';
import { StyleSheet, View, Image, FlatList, Text } from 'react-native';
import { IMAGE_OPTIONS } from '../constants';
import { getResults } from '../api';

export default class Result extends React.Component {
  state = {
    results: []
  };

  static navigationOptions = () => {
    return { title: 'Result List' };
  };

  async componentDidMount() {
    const data = await getResults();
    this.setState({ results: data.map((item, i) => ({ id: i, ...item })) });
  }

  render() {
    return (
      <FlatList
        data={this.state.results}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.created_at}`}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.rowContainer}>
              <Text style={styles.text}>{`Name: ${item.name}`}</Text>
              <Text style={styles.text}>{` | ${item.created_at}`}</Text>
            </View>
            <Image
              style={styles.resultImage}
              resizeMode='contain'
              source={IMAGE_OPTIONS[item.result]}
            />
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    marginVertical: 20
  },
  text: {
    fontSize: 15
  },
  resultImage: {
    width: 200,
    height: 300
  }
});
