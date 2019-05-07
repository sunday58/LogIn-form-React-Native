import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Routes from './src/Routes';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar 
        backgroundColor= "#1c313a"
        barStyle= "light-content"
      />
       <Routes/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create ({
container: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#5af654'
 
},
textStyle: {
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
  fontSize: 18,
  fontWeight: 'bold'
}
});

