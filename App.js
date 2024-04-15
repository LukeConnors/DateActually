import { 
  StyleSheet, 
  Text, View, 
  SafeAreaView, TouchableOpacity, 
  Image, TouchableWithoutFeedback, 
  TouchableHighlight,
  Button,
  StatusBar,
  Platform,
  Alert,
  TouchableNativeFeedback,
  Dimensions
} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'

export default function App() {
  console.log(useDeviceOrientation())
  const {landscape} = useDeviceOrientation();

  const handlePress = () => console.log("Text clicked!");

  return (
    <View
    style={{
      backgroundColor: "red",
      width: "100%",
      height: landscape ? "100%" : "30%",
    }}
    >

    </View>
  );
}

const containerStyle = { backgroundColor: "orange"}

// StyleSheet.create validates correct key-values, if this isn't used errors will not be thrown in the case of typos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    backgroundColor: 'red',
    color: 'white',
  },
});
