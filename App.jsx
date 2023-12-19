/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import Navigation from './src/routes/Navigation'
import {Provider} from 'react-native-paper';

function App() {

  return (
    <Provider>
      <Navigation/>
    </Provider>
  );
}

export default App;
