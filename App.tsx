import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/screens/Home';

import { ThemeProvider} from 'styled-components/native'
import theme from './src/themes';
import AppLoading from 'expo-app-loading';
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}


