import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Logo from '../Component/Logo';
import Form from '../Component/Form';
import {Actions} from 'react-native-router-flux';



export default class Login extends Component {
        signUp(){
            Actions.signUp();
        }

    render () {
        return (
            <View style={styles.containerStyle}>
                <Logo />
                <Form type= "Log In" />
                <View style={styles.signUpText}>
                        <Text style={styles.signUpStyle}>Don't have an account yet?</Text>
                        <TouchableOpacity onPress={this.signUp}>
                        <Text style={styles.signUpButton}> SignUp</Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
     
}

const styles = StyleSheet.create ({
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    signUpText: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexGrow: 1,
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signUpStyle: {
        fontSize: 16
    },
    signUpButton: {
        fontWeight: '500',
        fontSize: 16
    }
});