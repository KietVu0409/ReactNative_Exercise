import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lab02_a from './components/Lab02_a';
import Lab02_b from './components/Lab02_b';
import Lab02_c from './components/Lab02_c';
import Lab02_d from './components/Lab02_d';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Lab02_a/>;*/}
      {/*<Lab02_b/>;*/}
      {/*<Lab02_c/>;*/}
      <Lab02_d/>;
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});
