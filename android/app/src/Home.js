import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import BackGround from './BackGround';
import { Blue, darkGreen, green } from './constants';
import Btn from './Btn';

const Home = (props) => {
    return (
        <BackGround>
            <SafeAreaView style={styles.safeArea}>
                <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
                    <Text style={{ color: 'white', fontSize: 64 }}>Let's start</Text>
                    <Text style={{ color: 'red', fontSize: 64, marginBottom: 40 }}>Coding</Text>
                </View>
                <Btn bgColor={green} textColor='white' btnLabel='Login' onPress={() => props.navigation.navigate('Login')} />
                <Btn bgColor='white' textColor={darkGreen} btnLabel='Signup' onPress={() => props.navigation.navigate('Signup')} />
            </SafeAreaView>
        </BackGround>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    redText: {
        color: 'red',
        fontSize: 64,
    },
    whiteText: {
        color: 'white',
        fontSize: 64,
    },
});

export default Home;
