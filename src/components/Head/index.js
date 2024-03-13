import {View, Text } from 'react-native';
import styles from './style';


export default function Head() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Speech APP</Text>
    </View>
  );
}