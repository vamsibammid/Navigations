import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const BackGround = ({ children }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assests/leaves.jpg')} style={styles.background}>
                <View style={styles.overlay}>
                    {children}
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BackGround;
