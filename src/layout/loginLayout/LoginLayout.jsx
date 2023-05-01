import React from 'react';
import NavigationBar from '../../pages/Sheared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const LoginLayout = () => {
    return (
        <Container>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </Container>
    );
};

export default LoginLayout;