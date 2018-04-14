import React, { Component } from 'react';
import { Text, View } from 'react-native'

// Components
import NavBar from './NavBar/NavBar';

class Main extends Component {
    render(){
        return(
            <View>
                <Text>Main Container</Text>
                <NavBar />
            </View>
        );
    }
}

export default Main;