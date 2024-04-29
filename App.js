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
    alignItems: "center", // determines alignment of items in each line.
    alignContent: "center", //used for total content within view (only affects content with wrapping)
    flexWrap: "wrap"
  }}>
 <View style={{
  backgroundColor: "red",
  flexBasis: 100, //flex basis can set width or height
  flexGrow: 1,
  // width: 100,
  height: 100,
 }}>
 </View>
<View style={{
  backgroundColor: "dodgerblue",
  width: 100,
  height: 100,
}}>
</View>
<View style={{
  backgroundColor: "green",
  width: 100,
  height: 100,
}}>
</View>
<View style={{
  backgroundColor: "yellow",
  width: 100,
  height: 100,
}}>
</View>
<View style={{
  backgroundColor: "gray",
  width: 100,
  height: 100,
}}>
</View>
  </View>
 )
};
