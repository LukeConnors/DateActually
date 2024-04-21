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
 return(
  <View style={{
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }}>
 <View style={{
  backgroundColor: "red",
  width: 100,
  height: 300,
  alignSelf: "flex-start"
 }}>
 </View>
<View style={{
  backgroundColor: "dodgerblue",
  width: 100,
  height: 200,
}}>
</View>
<View style={{
  backgroundColor: "green",
  width: 100,
  height: 100,
}}>
</View>
  </View>
 )
};
