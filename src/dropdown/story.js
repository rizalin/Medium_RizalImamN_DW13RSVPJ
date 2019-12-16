import React, { Component } from 'react';
import { Grid, Avatar } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { Form, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './story.css'
import Headers from './../header/header'



class Story extends Component {
  render() {
    return (
      <div>
        <div className="headerN">
          <Headers />
        </div>
        <div className="containers">
          <Row className="justify-content-between" style={{paddingTop: '20px'}}>
            <Col sm={3}>
              <h1>Your Stories</h1>
            </Col>
            <Col sm={3} style={{ textAlign: 'end' }}>
              <Button variant="outline-dark" size="sm" style={{ marginRight: '10px' }}>Import a Story</Button>
              <Button variant="outline-success" size="sm" style={{ marginRight: '10px' }}>Write a Story</Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <div style={{ width: '100%', textAlign: 'center', marginTop: '80px' }}>
            <p>You have no drafts</p>
            <br></br>
            <p>Write on the go with our iOS and Android apps!</p>
          </div>
        </div>

      </div>

    );
  }
}

export default Story;
