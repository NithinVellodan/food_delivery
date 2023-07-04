import {SafeAreaView,StyleSheet} from 'react-native';
import React from 'react';
import Home from './src/components/screens/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.MainView}>
      <Home />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
});
