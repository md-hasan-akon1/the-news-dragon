import React from 'react';
import Header from '../pages/Sheared/Header/Header';
import Footer from '../pages/Sheared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Sheared/LaftNav/LeftNav';
import RightNav from '../pages/Sheared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';


const NewsLayout = () => {
    return (
        <Container>
            <Header></Header>

            <Container>

                <Row>

                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

        </Container>
    );
};

export default NewsLayout;