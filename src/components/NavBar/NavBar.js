import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class NavBar extends Component {
    render(){
        return(
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>UNT Events</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='more' />
                        </Button>
                    </Right>
                </Header>
        );
    }
}

export default NavBar;