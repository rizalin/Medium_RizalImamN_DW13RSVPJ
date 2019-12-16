import React, { Component } from 'react';
import { CssBaseline, Typography, Container, Grid, Avatar, Link } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Button, Row, Col, Media } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ArticleList from './articleList';
import Header from './../header/header'


class Category extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div className="konten">
        <div className='kontainers' style={{ paddingTop: '30px' }}>
          <Media>
            <img
              src={'https://imgur.com/download/0GRHZFl'}
              alt="Generic placeholder"
            />
            <Col sm={5}>
              <h3 style={{ marginTop: '20px' }}>
                <span class="writerR">The front lines of the future.</span> A Medium publication about tech and science.
              </h3>
            </Col>
            <Col sm={{ offset: 3 }} style={{ paddingRight: '0px', textAlign: 'right' }}>
              <Button variant="outline-primary" size="sm" style={{ marginTop: '30px', marginBottom: 'auto' }}>Follow</Button>
            </Col>
          </Media>
          <br></br>
          <br></br>
          <Media>
            <img
              src={"https://imgur.com/download/vgjoWPk"}
              alt="Generic placeholder"
            />
            <Media.Body className="textbody-L">
              <div>
                <a href="/articleDetail"><h1>Architects Are Playing With the Future of Design in Video Games</h1></a>
                <p>
                  Game Worlds can be blueprints for real word, liberating spaces where rules
                  can be reinvited and the invisible made visible
              </p>
                <p><span class="writerL">Thomas McMullan</span><br></br>Dec 9 . 6 min read</p>
              </div>
            </Media.Body>
          </Media>
          <br></br>
          <br></br>
          <Media>
            <Media.Body className="textbody-R">
              <h1>Welcome to a Refreshed OneZero</h1>
              <p>
                We have a few things to share
              </p>
              <p><span class="writerR">Damon Beres</span><br></br> Dec 3 . 6 min read</p>
            </Media.Body>
            <img
              src={"https://imgur.com/download/aciUopS"}
              alt="Generic placeholder"
            />
          </Media>
          <br></br>
          <br></br>
          <Media>
            <img
              src={"https://imgur.com/download/NgvARMk"}
              alt="Generic placeholder"
            />
            <Media.Body className="textbody-L" style={{ padding: '81px  50px' }}>
              <div>
                <h1>How to Totally Escape Ad Tracking at Home</h1>
                <p>
                  Shutting down ad trackers at the network level is difficult, but not impossible
              </p>
                <p><span class="writerL">Owen Williams</span><br></br>Dec 10 . 5 min read</p>
              </div>
            </Media.Body>
          </Media>
          <br></br>
          <br></br>
          <div className="textbody-C" >
            <div className="article" style={{ width: '58%' }}>
              <h1>"Even my oldest Echo, at five years old, works perfectly.
                This shouldn’t be a shocking revelation,
                but for a piece of technology these days, it is.”</h1>
              <h5 className="blockquote-footer" style={{ fontSize: '15px', color: 'black', marginTop: '10px' }}>
                Megan Morone
              </h5>
              <br></br>
              <h4>Alexa Is My Problematic Love</h4>
              <h5>Dec 9 . 6 min read</h5>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div >
          <img
            src={"https://imgur.com/download/65z1iye"}
            alt="Generic placeholder"
            style={
              { display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '90%' }}
          />
        </div>
        <br></br>
        <br></br>
        <div className="article">
          <ArticleList />
        </div>
      </div>
    )
  }
}


export default Category;
