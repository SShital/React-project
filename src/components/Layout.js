import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
export const Layout =(props) =>{
<Container>
    {props.children}
</Container>
}

export default Layout;
