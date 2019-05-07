import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';



export default class Form extends Component {
    render () {
        return (
            <View style={styles.containerStyle}>
                <TextInput style={styles.inputBox} underlineColorAndroid= 'rgba(0,0,0,0)'
                autoCorrect= {false} 
                placeholderTextColor= "red"
                keyboardType= "email-address"
                onSubmitEditing= {()=> this.password.focus()}
                placeholder="Email"/> 
--
                <TextInput style={styles.inputBox} underlineColorAndroid= 'rgba(0,0,0,0)' 
                placeholderTextColor= "red"
                secureTextEntry= {true}
                ref={(input) => this.password = input}
                placeholder="Password"/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonStyle}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
}

const styles = StyleSheet.create ({
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 18,
        marginVertical: 10
    },
    buttonStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
        

    },
    button: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 25,
        fontSize: 18,
        marginVertical: 10,
        paddingVertical: 12
    }
});