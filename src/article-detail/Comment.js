import React, { Component } from 'react';
import { Grid, Avatar } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { Form, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function Comment() {
    return (
        <div>
            <div className="comment">
                <Row style={{ marginBottom: '15px' }}>
                    <Avatar style={{ fontSize: '20px', height: '40px', width: '40px', marginLeft: '0.8rem' }}>R</Avatar>
                    <Col>
                        <h5 class="name">Rizal Imam Nugraha<br></br>
                            <span class='date'>Jan 23 . 1 min read</span></h5>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat quam ligula, non auctor arcu accumsan sit amet. 
          </p>
                <Row className='justify-content-between' style={{ width:'100%' }}>
                    <Col md={3} style={{ alignSelf: 'center' }}>
                        <Row style={{ marginLeft: '0px', alignItems:'flex-end' }}>
                            <ThumbUpAltIcon />
                            <h5>1k</h5>
                        </Row>
                    </Col>
                    <Col style={{ paddingRight: '0px', maxWidth:'18%'}}>
                        <Row className='justify-content-between' style={{alignItems:'center' }} >
                            <h5>10 Respons</h5>
                            <BookmarkBorderIcon />
                            <KeyboardArrowDownIcon />
                        </Row>
                    </Col>
                </Row>

            </div>
            <br></br>
            <br></br>
        </div>





    )
}

export default Comment;