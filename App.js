import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  console.log("Hello world! Success!");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>DATE ACTUALLY</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'red',
    color: 'white',
  },
});
