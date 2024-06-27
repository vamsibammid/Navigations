import { View, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import React from 'react';
import BackGround from './BackGround';
import { Blue, darkGreen } from './constants';
import Field from './Field';
import Btn from './Btn';

const Login = (props) => {
    return (
        <BackGround>
            <View style={styles.container}>
                <Text style={styles.loginText}>LOGIN</Text>
                <View style={styles.innerContainer}>
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                    <Text style={styles.loginPrompt}>Login to your Account</Text>
                    <Field placeholder="Email/UserName" keyboardType={"email-address"} />
                    <Field placeholder="Password" secureTextEntry={true} />
                    <View style={styles.forgotPasswordContainer}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </View>
                    <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" onPress={() => Alert.alert("LoggedIn")} />
                    <View style={styles.signupContainer}>
                        <Text style={styles.signupText}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
                            <Text style={styles.signupLink}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </BackGround>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        color: 'white',
        fontSize: 52,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    innerContainer: {
        backgroundColor: 'white',
        height: 480,
        width: 460,
        borderTopLeftRadius: 130,
        paddingTop: 80,
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 46,
        color: darkGreen,
        fontWeight: 'bold',
    },
    loginPrompt: {
        color: 'grey',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    forgotPasswordContainer: {
        alignItems: 'flex-end',
        width: '78%',
        paddingRight: 16,
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: darkGreen,
        fontWeight: 'bold',
        fontSize: 16,
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    signupText: {
        color: Blue,
        fontWeight: 'bold',
        fontSize: 16,
    },
    signupLink: {
        color: darkGreen,
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 5,
    },
});

export default Login;
