import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';

export default function App() {
  console.log("Hello world! Success!");

  const handlePress = () => console.log("Text clicked!");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={3} onPress={handlePress} style={styles.title}>DATE ACTUALLY - we can say a lot of things because we want to test the number of lines truncation feature on the text element.</Text>
     {/* require  returns reference number to image */}
     {/* <Image source={require('./assets/icon.png')} /> */}
     {/* Network images require specified dimensions to be visible,
      while local images do not. */}
      <TouchableOpacity onLongPress={() => console.log("image held")} onPress={() => console.log("image tapped")}>
      <Image 
      blurRadius={2}
      fadeDuration={2}
      source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"}
        } />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'red',
    color: 'white',
  },
});
