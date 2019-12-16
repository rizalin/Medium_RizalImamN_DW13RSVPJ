import React, { Component } from 'react';
import { Grid, Avatar, TextField } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { Form, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Comment from './Comment'
import HeaderMedium from './../header/headermedium';


class CommentSection extends Component {
  render() {
    return (
      <div>
        <div className="headerN">
          <HeaderMedium />
        </div>
        <div style={{ padding: '40px 0' }}>
          <div className="article" >
            <h4 className='comments'>Showing responses for:</h4>
            <div className="comment" >
              <Row className="justify-content-between" style={{width:'100%'}}>
                <Col sm={7}>
                  <a href="/articleDetail"><h5>If You Only Read a Few Books in 2019, Read These<br></br>
                  <span style={{color:'#757575'}}>Ryan Holiday</span></h5></a>
                </Col>
                <Col sm={2}>
                  <Row style={{display:'flex', justifyContent:'space-evenly'}}>
                    <ThumbUpAltIcon style={{fontSize:'18px'}}/>
                    <h5>25k</h5>
                    <ChatBubbleIcon style={{fontSize:'18px'}}/>
                    <h5>65</h5>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#FAFAFA' }}>
          <div className="article" >
            <div className="comments" style={{ paddingTop: '20px' }}>
              <h4>Responses</h4>
              <br></br>
              <div className="comment" style={{ display: 'flex' }}>
                <Avatar style={{ fontSize: '20px', height: '40px', width: '40px' }}>R</Avatar>
                <TextField

                  style={{ marginLeft: 20, marginTop: 8, width: '80%' }}

                  margin="normal"
                  placeholder="Write a response..."
                  InputLabelProps={{
                    borderColor: 'blue'
                  }}
                />
              </div>
              <br></br>
              <Comment />
              <Comment />
              <Comment />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentSection;
