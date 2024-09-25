import 'react-native-gesture-handler'; // Keep this at the top
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainContainer from './components/Main'; // MainContainer handles the bottom navigation

function App() {
  return (
    <NavigationContainer>
      <MainContainer />
    </NavigationContainer>
  );
}

export default App;
