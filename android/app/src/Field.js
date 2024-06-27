import { ImageBackgroundComponent, StyleSheet } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
import { darkGreen } from './constants';

const Field = (props) => {
    return (
        <TextInput {...props} style={{ borderRadius: 100, color: darkGreen, paddingHorizontal: 10, width: '75%', backgroundColor: 'rgb(220,220,220)', marginVertical: 10 }} placeholderTextColor={darkGreen}>

        </TextInput>
    )
}

const style = StyleSheet.create({

})

export default Field