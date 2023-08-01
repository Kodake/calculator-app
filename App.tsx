import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import Calculator from './screens/Calculator';
import { styles } from './styles/appStyles';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />
      <Calculator />
    </SafeAreaView>
  )
};

export default App;