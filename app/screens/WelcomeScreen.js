import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native-web';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style = {styles.background}
        source={require('./assets/romance.jpg')}
        ></ImageBackground>
    );

}

const styles = StyleSheet.create({
background: {

}
})

export default WelcomeScreen;