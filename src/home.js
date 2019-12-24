import React, { Component } from "react";
import { CssBaseline, Container, Grid, Link } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SearchIcon from "@material-ui/icons/Search";
import { Navbar, Nav, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Register from "./login/reg";
import Popovers from "./dropdown/Popover";
import SmallArticle from "./home/smallArticle";
import ArticleMap from "./home/articleMap";
import NavList from "./home/navlist";
import LatestArticle from "./home/latestArticle";

const style = {
  logo: {
    height: "22px"
  }
};

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <div className="containers">
            <Row
              className="justify-content-between"
              style={{ padding: "20px 0px" }}
            >
              <Col sm={2}>
                <img
                  src={
                    "https://cdn.worldvectorlogo.com/logos/medium-wordmark.svg"
                  }
                  style={style.logo}
                  alt="placeholder"
                ></img>
              </Col>
              <Col sm={2}>
                <Row className="justify-content-between">
                  <SearchIcon style={{ fontSize: 25 }} />
                  <NotificationsNoneIcon style={{ fontSize: 25 }} />
                  <Register />
                  <Popovers />
                </Row>
              </Col>
            </Row>
          </div>
          <div className="containers">
            <Navbar>
              <Nav style={{ fontSize: "14px", fontWeight: "300" }}>
                <NavList />
              </Nav>
            </Navbar>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed style={{ marginTop: "15px" }}>
          <Grid container direction="row" justify="space-between">
            <div>
              <Card style={{ width: "400px", height: "0px" }}>
                <Card.Img
                  variant="top"
                  src={"https://imgur.com/download/xfIzy2C"}
                />
                <Card.Body
                  style={{ marginLeft: "40px" }}
                  className="card-title"
                >
                  <Card.Title className="card-title">
                    How to Find Hidden Cameras in Your Airbnb, and Anywhere Else
                  </Card.Title>
                  <p>
                    Sharpen your vigilance — or paranoia — with these tricks and
                    tools
                  </p>
                  <p>
                    <span className="black">Fast Company</span> <br></br>
                    Apr 15 . 6 min read
                  </p>
                </Card.Body>
              </Card>
            </div>
            <div>
              <SmallArticle />
              <SmallArticle />
              <SmallArticle />
            </div>
            <div>
              <Card style={{ width: "350px", height: "0px" }}>
                <Card.Img
                  variant="top"
                  src={"https://imgur.com/download/MwvS5kg"}
                  style={{ width: "350px", height: "160px" }}
                />
                <Card.Body className="card-title">
                  <Card.Title className="card-title">
                    A Life-Changing Exercise to Make You a Better Writer
                  </Card.Title>
                  <p>I recently went to a non fiction writing</p>
                  <p>
                    <span className="black">Carly Mae</span> <br></br>
                    Jun 11 . 5 min read
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Grid>
        </Container>
        <div className="containers">
          <p style={{ textAlign: "right", marginBottom: "15px" }}>
            <Link href="/test">
              SEE ALL FEATURED <ArrowForwardIosIcon style={{ fontSize: 12 }} />
            </Link>
          </p>
          <hr></hr>
        </div>
        <div className="containers">
          <Row>
            <Col sm={3}>
              <div
                style={{
                  marginTop: "20px",
                  position: "sticky",
                  top: "0",
                  alignItems: "flex-start"
                }}
              >
                <h2>Popular on Medium</h2>
                <hr></hr>
                <br></br>
                <LatestArticle />
                <hr></hr>
                <div>
                  <Navbar
                    bg="light"
                    variant="light"
                    style={{ padding: "0", height: "20px" }}
                  >
                    <Nav style={{ fontSize: "12px", maxWidth: "330px" }}>
                      <Nav.Link href="#home" style={{ paddingLeft: "0" }}>
                        Help
                      </Nav.Link>
                      <Nav.Link href="#features">Status</Nav.Link>
                      <Nav.Link href="#pricing">Writers</Nav.Link>
                      <Nav.Link href="#features">Blog</Nav.Link>
                      <Nav.Link href="#pricing">Careers</Nav.Link>
                    </Nav>
                  </Navbar>
                  <Navbar
                    bg="light"
                    variant="light"
                    style={{ paddingLeft: "0", padding: "0", height: "20px" }}
                  >
                    <Nav style={{ fontSize: "12px", maxWidth: "330px" }}>
                      <Nav.Link href="#pricing" style={{ paddingLeft: "0" }}>
                        Privacy
                      </Nav.Link>
                      <Nav.Link href="#features">Terms</Nav.Link>
                      <Nav.Link href="#features">About</Nav.Link>
                    </Nav>
                  </Navbar>
                </div>
              </div>
            </Col>
            <Col sm={{ span: 8, offset: 1 }} style={{ marginTop: "35px" }}>
              <ArticleMap />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
