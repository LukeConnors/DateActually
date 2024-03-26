import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  console.log("Hello world! Success!");

  const handlePress = () => console.log("Text clicked!");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} style={styles.title}>DATE ACTUALLY - we can say a lot of things because we want to test the number of lines truncation feature on the text element.</Text>
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
