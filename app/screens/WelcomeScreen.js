import React from 'react';
import { ImageBackground, StyleSheet, View} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style = {styles.background}
        source={require('../assets/romance.jpg')}

        >
            <View style={styles.loginButton}>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
background: {
flex: 1,
},

loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "black",
}
})

export default WelcomeScreen;