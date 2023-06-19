import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SOSToggleBox from './src/component/ToggloeBtn';

export default function App() {
  return (
    <View style={styles.container}>
      <SOSToggleBox></SOSToggleBox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
