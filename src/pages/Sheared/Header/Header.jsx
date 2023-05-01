import React from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import { Button } from 'react-bootstrap';

const Header = () => {
   
    return (
        <div className='mb-4'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM DD YYYY, h:mm a")}</p>
            </div>
            <div className='d-flex justify-content-center align-items-center my-3'>
            <Button variant="danger">Latest</Button>
                <Marquee>
                   <p className='text-danger m-0'> I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text.</p>
                </Marquee>
            </div>

        </div>
    );
};

export default Header;