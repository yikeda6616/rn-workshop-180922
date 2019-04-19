import React from 'react';

import Omikuji from './screens/Omikuji';
import Result from './screens/Result';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Omikuji: {
    screen: Omikuji
  },
  Result: {
    screen: Result
  }
});

export default (AppContainer = createAppContainer(AppNavigator));
