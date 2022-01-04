import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import styles from './src/components/theme/appTheme';
import CalculatorScreen from './src/screens/CalculatorScreen';

export const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />
      <CalculatorScreen />
    </SafeAreaView>
  )
}

export default App;