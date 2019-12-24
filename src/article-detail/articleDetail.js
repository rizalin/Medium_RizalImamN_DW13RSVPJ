import React, { Component } from "react";
import { Avatar } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Follow from "./follow";
import HeaderW from "./../header/headerW";
import DetailMap from "./detailMap";
import RelatedArticle from "./articlemap";

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
        <div className="kontainers" style={{ paddingBottom: "20px" }}>
          <img
            src={"https://imgur.com/download/TJf2oHV"}
            alt="placeholder"
          ></img>
          <p className="imgDesc">Books</p>
        </div>
        <div className="article">
          <DetailMap />
          <Col sm={8}>
            <Row className="justify-content-between">
              <Button variant="light" size="sm">
                Books
              </Button>
              <Button variant="light" size="sm">
                Book Recomendations
              </Button>
              <Button variant="light" size="sm">
                Self
              </Button>
              <Button variant="light" size="sm">
                Reading
              </Button>
              <Button variant="light" size="sm">
                Culture
              </Button>
            </Row>
          </Col>
          <br></br>
          <br></br>
          <Row className="justify-content-between">
            <Col style={{ maxWidth: "20%" }}>
              <Row
                className="justify-content-between"
                style={{ marginLeft: "0px", alignItems: "flex-end" }}
              >
                <Avatar
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "solid .3px #c0c0c0",
                    width: "50px",
                    height: "50px"
                  }}
                >
                  <ThumbUpAltIcon style={{ fontSize: "29px" }} />
                </Avatar>
                <p style={{ fontSize: "16px" }}>25k likes</p>
              </Row>
            </Col>
            <Col sm={2} style={{ alignSelf: "center" }}>
              <Row className="justify-content-between">
                <TwitterIcon style={{ fontSize: "29px" }} />
                <FacebookIcon style={{ fontSize: "29px" }} />
                <BookmarkBorderIcon style={{ fontSize: "29px" }} />
                <MoreHorizIcon style={{ fontSize: "29px" }} />
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
          <Button
            variant="outline-success"
            href="/commentSection"
            style={{ width: "100%", height: "50px" }}
          >
            See Responses (54)
          </Button>
        </div>
        <br></br>
        <RelatedArticle />
      </div>
    );
  }
}

export default ArticleDetail;
