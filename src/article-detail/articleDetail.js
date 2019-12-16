import React, { Component } from 'react';
import { CssBaseline, Typography, Container, Grid, Avatar, Link } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button, Row, Col, Media } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Follow from './follow';
import HeaderW from './../header/headerW'
import Related from './related';



class ArticleDetail extends Component {
  render() {
    return (
      <div className="App">
        <HeaderW />
        <Content />
      </div>
    );
  }
}


class Content extends Component {
  render() {
    return (
      <div className="konten">
        <div className='kontainers' style={{ paddingBottom: '20px' }}>
          <img src={'https://imgur.com/download/TJf2oHV'}></img>
          <p className='imgDesc'>Books</p>
        </div>
        <div className="article">
          <div>
            <h1>
              If You Only Read A Few Books in 2019, Read These
          </h1>
            <br></br>
            <Row style={{ margin: '0px' }}>
              <Col style={{ padding: '0px' }}>
                <Row className="profile">
                  <Avatar style={{ height: '50px', width: '50px' }}>A</Avatar>
                  <Col className='profilTop'>
                    <div className='proText'>
                      <p style={{ color: "black", fontWeight: '300px' }}>Ryan Holiday</p>
                      <Button variant="outline-success" size="sm">Follow</Button>
                    </div>
                    <div>
                      <p>Jun 26, 2018. 10 min read</p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col style={{ padding: '0px', margin: '15px 0px 0px', textAlign: 'end' }}>
                <TwitterIcon />
                <LinkedInIcon />
                <FacebookIcon />
                <BookmarkBorderIcon />
              </Col>
            </Row>
            <br></br>
            <div className="content">
              <p>
                If you’d like to be jerked around less, provoked less, and more productive and inwardly focused, where should you start in 2019?
            <br></br>
                <br></br>
                To me, the answer is obvious: by turning to wisdom. Below is a list of 15 books that will help lead you to a better, stronger, happier 2019.
          </p>
              <br>
              </br>
              <div style={{ padding: '40px', letterSpacing: '20px', textAlign: 'center' }}><p>&middot;&middot;&middot;</p></div>
              <p><span className="bolU">Deep Work: Rules for Focused Success in a Distracted World by Call New port.</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus augue, suscipit vel scelerisque id, ullamcorper quis tellus.
                Nam at suscipit velit. Pellentesque eget tortor quis ipsum dapibus tincidunt nec eget odio. Donec ut condimentum velit. Maecenas id ultricies eros.
                Ut laoreet molestie lectus ut imperdiet. Vestibulum velit erat, congue a molestie non, vulputate ut ipsum. Aliquam vel ex risus. Quisque leo arcu,
                ullamcorper quis neque efficitur, semper dictum mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Duis eleifend nisi consequat tellus elementum fermentum. Nullam vestibulum non ante ac commodo. Donec ut ultrices enim. Suspendisse eget fringilla nulla.
                Fusce venenatis nibh porta, dictum ligula eget, porttitor nibh. Etiam gravida quis lorem sed pretium. Integer eleifend hendrerit diam vitae pretium.
                Praesent feugiat libero quis risus laoreet, euismod gravida odio feugiat. Cras a enim nisi. Integer posuere ligula condimentum, congue sapien sed,
                aliquam tortor. Aenean vehicula placerat.
          </p>
              <br></br>
              <p><span className="bolU">Deep Work: Rules for Focused Success in a Distracted World by Call New port.</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus augue, suscipit vel scelerisque id, ullamcorper quis tellus.
                Nam at suscipit velit. Pellentesque eget tortor quis ipsum dapibus tincidunt nec eget odio. Donec ut condimentum velit. Maecenas id ultricies eros.
                Ut laoreet molestie lectus ut imperdiet. Vestibulum velit erat, congue a molestie non, vulputate ut ipsum. Aliquam vel ex risus. Quisque leo arcu,
                ullamcorper quis neque efficitur, semper dictum mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Duis eleifend nisi consequat tellus elementum fermentum. Nullam vestibulum non ante ac commodo. Donec ut ultrices enim. Suspendisse eget fringilla nulla.
                Fusce venenatis nibh porta, dictum ligula eget, porttitor nibh. Etiam gravida quis lorem sed pretium. Integer eleifend hendrerit diam vitae pretium.
                Praesent feugiat libero quis risus laoreet, euismod gravida odio feugiat. Cras a enim nisi. Integer posuere ligula condimentum, congue sapien sed,
                aliquam tortor. Aenean vehicula placerat.
          </p>
              <br></br>
              <p><span className="bolU">Deep Work: Rules for Focused Success in a Distracted World by Call New port.</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus augue, suscipit vel scelerisque id, ullamcorper quis tellus.
                Nam at suscipit velit. Pellentesque eget tortor quis ipsum dapibus tincidunt nec eget odio. Donec ut condimentum velit. Maecenas id ultricies eros.
                Ut laoreet molestie lectus ut imperdiet. Vestibulum velit erat, congue a molestie non, vulputate ut ipsum. Aliquam vel ex risus. Quisque leo arcu,
                ullamcorper quis neque efficitur, semper dictum mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Duis eleifend nisi consequat tellus elementum fermentum. Nullam vestibulum non ante ac commodo. Donec ut ultrices enim. Suspendisse eget fringilla nulla.
                Fusce venenatis nibh porta, dictum ligula eget, porttitor nibh. Etiam gravida quis lorem sed pretium. Integer eleifend hendrerit diam vitae pretium.
                Praesent feugiat libero quis risus laoreet, euismod gravida odio feugiat. Cras a enim nisi. Integer posuere ligula condimentum, congue sapien sed,
                aliquam tortor. Aenean vehicula placerat.
          </p>
              <br></br>
              <p><span className="bolU">Deep Work: Rules for Focused Success in a Distracted World by Call New port.</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus augue, suscipit vel scelerisque id, ullamcorper quis tellus.
                Nam at suscipit velit. Pellentesque eget tortor quis ipsum dapibus tincidunt nec eget odio. Donec ut condimentum velit. Maecenas id ultricies eros.
                Ut laoreet molestie lectus ut imperdiet. Vestibulum velit erat, congue a molestie non, vulputate ut ipsum. Aliquam vel ex risus. Quisque leo arcu,
                ullamcorper quis neque efficitur, semper dictum mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Duis eleifend nisi consequat tellus elementum fermentum. Nullam vestibulum non ante ac commodo. Donec ut ultrices enim. Suspendisse eget fringilla nulla.
                Fusce venenatis nibh porta, dictum ligula eget, porttitor nibh. Etiam gravida quis lorem sed pretium. Integer eleifend hendrerit diam vitae pretium.
                Praesent feugiat libero quis risus laoreet, euismod gravida odio feugiat. Cras a enim nisi. Integer posuere ligula condimentum, congue sapien sed,
                aliquam tortor. Aenean vehicula placerat.
          </p>
            </div>
            <br></br>
          </div>
          <Col sm={8}>
            <Row className="justify-content-between">
              <Button variant="light" size="sm">Books</Button>
              <Button variant="light" size="sm">Book Recomendations</Button>
              <Button variant="light" size="sm">Self</Button>
              <Button variant="light" size="sm">Reading</Button>
              <Button variant="light" size="sm">Culture</Button>
            </Row>
          </Col>
          <br></br>
          <br></br>
          <Row className="justify-content-between">
            <Col style={{ maxWidth: '20%' }}>
              <Row className="justify-content-between" style={{ marginLeft: '0px', alignItems: 'flex-end' }}>
                <Avatar style={{
                  backgroundColor: 'white', color: 'black',
                  border: 'solid .3px #c0c0c0', width: '50px', height: '50px'
                }}><ThumbUpAltIcon style={{ fontSize: '29px' }} /></Avatar>
                <p style={{ fontSize: '16px' }}>25k likes</p>
              </Row>
            </Col>
            <Col sm={2} style={{ alignSelf: 'center' }}>
              <Row className="justify-content-between" >
                <TwitterIcon style={{ fontSize: '29px' }} />
                <FacebookIcon style={{ fontSize: '29px' }} />
                <BookmarkBorderIcon style={{ fontSize: '29px' }} />
                <MoreHorizIcon style={{ fontSize: '29px' }} />
              </Row>
            </Col>
          </Row>
          <br></br>
          <hr></hr>
        </div>
        <br></br>
        <div className="article">
          <Follow />
          <hr></hr>
          <Button variant="outline-success" href="/commentSection"
          style={{width: '100%', height:'50px'}}>See Responses (54)</Button>
        </div>        
        <br></br>
        <Related />
      </div>
    )
  }
}

export default ArticleDetail;