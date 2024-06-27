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
                <Text style={styles.loginText}>REGISTER</Text>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Create a new account</Text>
                <View style={styles.innerContainer}>
                    <Field placeholder="FirstName" />
                    <Field placeholder="LastName" />
                    <Field placeholder="Email/UserName" keyboardType={"email-address"} />
                    <Field placeholder="Contact Number" keyboardType={'number'} />
                    <Field placeholder="Password" secureTextEntry={true} />
                    <Field placeholder="Confirm Password" secureTextEntry={true} />
                    <View style={styles.termsContainer}>
                        <Text style={styles.forgotPasswordText}>By signing in, you agree to our</Text>
                        <Text style={styles.termsText}> Terms & Conditions</Text>
                        <Text style={styles.andText}> and </Text>
                        <Text style={styles.termsText}> Privacy Policy</Text>
                    </View>
                    <Btn textColor='white' bgColor={darkGreen} btnLabel="Signup" onPress={() => Alert.alert("Account Created")} />
                    <View style={styles.signupContainer}>
                        <Text style={styles.signupText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                            <Text style={styles.signupLink}>LOGIN</Text>
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
        color: 'Red',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    innerContainer: {
        backgroundColor: 'white',
        height: 610,
        width: 430,
        borderTopLeftRadius: 130,
        paddingTop: 30,
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
    termsContainer: {
        flexDirection: 'row',
        width: '78%',
        paddingRight: 16,
        marginBottom: 20,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    forgotPasswordText: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 16,
    },
    termsText: {
        color: darkGreen,
        fontWeight: 'bold',
        fontSize: 16,
    },
    andText: {
        color: 'grey',
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
