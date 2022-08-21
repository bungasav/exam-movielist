import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {MovieProvider} from './src/context/movie';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createTheme, ThemeProvider} from '@rneui/themed';

import Navigation from './src/navigation';
const theme = createTheme({});

const App = () => {
  return (
    <SafeAreaProvider>
      <MovieProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </ThemeProvider>
      </MovieProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
