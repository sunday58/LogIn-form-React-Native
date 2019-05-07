import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


export default class Logo extends Component {
    render () {
        return (
            <View style={styles.containerStyle}>
                <Image style={{width:150, height: 200}}
                    source={require('../Component/IMG_20180207_112450.jpg')}
                />
                <Text style={styles.textStyle}>Corp Members Profile</Text>
            </View>
        )
    }
    
}

const styles = StyleSheet.create ({
    containerStyle: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexGrow: 1
    },
    textStyle: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    }
});