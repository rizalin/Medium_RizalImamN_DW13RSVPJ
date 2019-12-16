import React, { Component } from 'react';
import { Grid, Avatar } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { Form, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HeaderMedium from './../header/headermedium';



class Profile extends Component {
    render() {
        return (
            <div>
                <div className="headerN">
                    <HeaderMedium />
                </div>
                <div className="article" style={{ paddingTop: '60px' }}>
                    <Row className="justify-content-between" style={{ marginBottom:'50px' }}>
                        <Col sm={7} style={{ maxWidth:'57%'}}>
                            <Row className="justify-content-between" style={{ alignItems:'center', marginLeft:'0px'}}>
                                <h2 style={{ fontSize: '32px', fontWeight: '400' }}>Rizal Imam Nugraha</h2>
                                <Button variant="outline-dark" size="sm" style={{ padding:'0px 10px'}}>Edit profile</Button>
                            </Row>
                            <br></br>
                            <p>1 following</p>
                        </Col>
                        <Col sm={2}>
                            <Avatar style={{ height: "130px", width: '130px', fontSize: '50px' }}>R</Avatar>
                        </Col>
                    </Row>
                    
                    <p>Rizal Imam nugraha hasn’t been active on Medium yet. Check back later to see their stories, claps, and highlights.</p>

                </div>

            </div>

        );
    }
}

export default Profile;
