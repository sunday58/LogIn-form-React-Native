import React, {Component} from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';


export default class Routes extends Component {
    render () {
        return(
            <Router>
                <Stack key= "root" hideNavBar= {true} cardStyle={{backgroundColor: '#5af654'}}>
                    <Scene key= "login" component={Login} title= "Login" initial= {true}/>
                    <Scene key= "signUp" component={SignUp} title= "SignUp"/>
                </Stack>
            </Router>
        )
    }
}