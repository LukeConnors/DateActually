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
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
 return(
 <WelcomeScreen />
 )
};
