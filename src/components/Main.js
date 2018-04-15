import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { Container, Content } from 'native-base';
// Components
import Body from './Body/Body';
import NavBar from './NavBar/NavBar';

class Main extends Component {
    render(){
        return(
            <Container>
                <NavBar />
                <Content>
                    <Body />
                </Content>
            </Container>
        );
    }
}

export default Main;