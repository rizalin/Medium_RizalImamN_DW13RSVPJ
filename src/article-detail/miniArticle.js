import React from 'react';
import { CssBaseline, Typography, Container, Grid, Avatar, Link } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { CardDeck, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function MiniArticle(props) {
  return (
   
      <Col>
        <Card>
          <h4>More from Mission.org</h4>
          <Card.Img variant="top" src={"https://imgur.com/download/fEslAxG"} />
          <Card.Body>
            <h2>{props.title}</h2>

            <Row className="justify-content-between" style={{ marginTop: '20px', }}>
              <Col md={8}>
                <Row>
                  <Avatar style={{ fontSize: '15px', height: '40px', width: '40px', marginLeft: '10px', marginRight: '10px' }}>H</Avatar>
                  <div style={{ paddingTop: 3 }}>
                    <h5 >{props.writers} in Mission.org</h5>
                    <h5 className="time">{props.postTime}. {props.readTime} min read</h5>
                  </div>
                </Row>
              </Col>
              <Col md={4}>
                <Row style={{ marginTop: '10px', marginRight: '5px' }} className="justify-content-end">
                  
                    <ThumbUpIcon style={{ fontSize: 22 }} />
                    <h5 style={{ marginTop: '5px', marginRight: '5px', marginLeft: '5px' }}>23k</h5>
                  
                  <h4> | </h4>
                  <BookmarkBorderIcon style={{ fontSize: 22, marginLeft: '5px' }} />
                </Row>
              </Col>

            </Row>




          </Card.Body>
        </Card>
      </Col >
 

  );
}

export default MiniArticle;
