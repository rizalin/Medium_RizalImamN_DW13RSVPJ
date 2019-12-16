import React, { Component } from 'react';
import {Avatar, Link } from '@material-ui/core';
import { Button, Popover, OverlayTrigger, ButtonToolbar, Row, Col, Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const popover = (
    <Popover id="popover-basic">

        <Popover.Content>
            <div className='DDmenu'>
                <Row>
                    <Avatar style={{ fontSize: '20px', height: '50px', width: '50px',  marginTop: '0.6rem' }}>R</Avatar>
                    <Col>
                        <p>Rizal Imam Nugraha<br></br>
                            <span style={{ color: '#837575' }}>@rizalin</span></p>
                    </Col>
                </Row>
                <Link href="#">Become a Member</Link>
            </div>

            <Dropdown.Divider />
            <Dropdown.Item href="/newStory">New story</Dropdown.Item>
            <Dropdown.Item href="/story">Stories</Dropdown.Item>
            <Dropdown.Item href="/stats" >Stats</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/bookmark">Bookmarks</Dropdown.Item>
            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
            <Dropdown.Item eventKey="2">Settings</Dropdown.Item>
            <Dropdown.Item eventKey="3" >Help</Dropdown.Item>
            <Dropdown.Item eventKey="3" >Sign out</Dropdown.Item>
        </Popover.Content>
    </Popover>
);

function Popovers() {
    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Avatar style={{ fontSize: '15px', height: '30px', width: '30px' }}>R</Avatar>
        </OverlayTrigger>
    )
}




export default Popovers;

