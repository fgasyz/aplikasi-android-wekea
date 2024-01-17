/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/routes/Navigation';
import {Provider} from 'react-native-paper';
import Colors from './src/constants/Colors.js';

function App() {
  return (
    <Provider>
       <StatusBar backgroundColor= {Colors.marronRed}/>
      <Navigation />
    </Provider>
  );
}

export default App;
