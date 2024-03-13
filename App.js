import React from 'react';
import { View, StyleSheet} from 'react-native';
import Head from './src/components/Head';
import Form from './src/components/Form';

export default function App() {

  return (
    <View style={styles.container}>
      <Head/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#0d1117'
  }
})