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
  <>
 <View style={{
  backgroundColor: "red",
  flex: 0.5,
 }}>
 </View>
<View style={{
  backgroundColor: "dodgerblue",
  flex: 0.5
}}>

</View>
  </>
 )
};
