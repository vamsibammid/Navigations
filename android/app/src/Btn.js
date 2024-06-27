import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Btn = ({ bgColor, textColor, btnLabel, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: bgColor }]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, { color: textColor }]}>
                {btnLabel}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        width: 350,
        paddingVertical: 5,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default Btn;
