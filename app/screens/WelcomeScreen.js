import React from 'react';
import { ImageBackground, StyleSheet, View} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style = {styles.background}
        source={require('../assets/romance.jpg')}

        >
            <View>
            </View>
            <View style={styles.loginButton}>

            </View>
            <View style={styles.registerButton}>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
background: {
flex: 1,
justifyContent: 'flex-end',
},

loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "red",
},

registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "green",
}
})

export default WelcomeScreen;