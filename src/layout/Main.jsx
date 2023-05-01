
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../pages/Sheared/Header/Header';
import Footer from '../pages/Sheared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Sheared/LaftNav/LeftNav';
import RightNav from '../pages/Sheared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Sheared/NavigationBar/NavigationBar';


const Main = () => {
    return (
        <div className='container'>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>

                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>



            <Footer></Footer>

        </div>
    );
};

export default Main;