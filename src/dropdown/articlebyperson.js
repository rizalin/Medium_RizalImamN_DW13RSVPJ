import React, { Component } from "react";
import { Avatar } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import TwitterIcon from "@material-ui/icons/Twitter";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderMedium from "./../header/headermedium";
import ArticleTabs from "./tabsArticle";

class ArticleByPerson extends Component {
  render() {
    return (
      <div>
        <div className="headerN">
          <HeaderMedium />
        </div>
        <div className="article" style={{ paddingTop: "60px" }}>
          <Row
            className="justify-content-between"
            style={{ marginBottom: "50px" }}
          >
            <Col sm={10}>
              <Row
                className="justify-content-left"
                style={{ alignItems: "center", marginLeft: "0px" }}
              >
                <h1>Ryan Holiday</h1>
                <Button
                  variant="outline-dark"
                  size="sm"
                  style={{ padding: "0px 10px" }}
                >
                  Follow
                </Button>
                <KeyboardArrowDownIcon />
              </Row>
              <p>
                Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The
                Obstacle Is The Way’ http://amzn.to/24qKRWR
              </p>
              <Col sm={5} style={{ padding: "0px" }}>
                <Row
                  className="justify-content-between"
                  style={{ alignItems: "center", marginLeft: "0px" }}
                >
                  <h6>246 Following</h6>
                  <h6>101k Followers</h6>
                  <TwitterIcon style={{ fontSize: "20px" }} />
                </Row>
              </Col>
            </Col>
            <Col sm={2}>
              <Avatar
                style={{ height: "130px", width: "130px", fontSize: "50px" }}
              >
                R
              </Avatar>
            </Col>
          </Row>
          <br></br>
          <ArticleTabs />
          <br></br>
          <h4 style={{ fontSize: "18px" }}>Featured</h4>
          <br></br>
          <div className="box">
            <Row style={{ marginBottom: "25px" }}>
              <Avatar
                style={{ fontSize: "20px", height: "40px", width: "40px" }}
              >
                R
              </Avatar>
              <Col>
                <p class="name">
                  Ryan Holiday in Human Parts
                  <br></br>June 1, 2018 . 6 min read
                </p>
              </Col>
            </Row>
            <img
              src="https://imgur.com/download/4xwzwta"
              style={{ marginBottom: "25px" }}
              alt="placeholder"
            />
            <br></br>
            <h2>How To Recover When The World Breaks You</h2>
            <h4>We all break. The key is to become strong when broken...</h4>

            <Row
              className="justify-content-between"
              style={{ width: "100%", marginTop: "20px" }}
            >
              <Col style={{ maxWidth: "15%", paddingLeft: "0px" }}>
                <Row style={{ alignItems: "center" }}>
                  <ThumbUpAltIcon />
                  <p>1k</p>
                </Row>
              </Col>
              <Col style={{ maxWidth: "20%", paddingRight: "0px" }}>
                <Row style={{ alignItems: "center" }}>
                  <p>10 Responses</p>
                  <BookmarkBorderIcon />
                </Row>
              </Col>
            </Row>
          </div>
          <br></br>
          <br></br>
          <h4 style={{ fontSize: "18px" }}>Latest</h4>
          <br></br>
          <div className="box">
            <Row style={{ marginBottom: "18px" }}>
              <Avatar
                style={{ fontSize: "20px", height: "40px", width: "40px" }}
              >
                R
              </Avatar>
              <Col>
                <p class="name">
                  Ryan Holiday in Human Parts
                  <br></br>Dec 14 . 6 min read
                </p>
              </Col>
            </Row>
            <img
              src="https://imgur.com/download/3jT79wQ"
              style={{ marginBottom: "25px" }}
              alt="placeholder"
            />
            <h2>What Hunting Can Teach Us About Life</h2>
            <h4>Here me out : hunting isn't what you think</h4>

            <Row
              className="justify-content-between"
              style={{ width: "100%", marginTop: "20px" }}
            >
              <Col style={{ maxWidth: "15%", paddingLeft: "0px" }}>
                <Row>
                  <ThumbUpAltIcon />
                  <p>1k</p>
                </Row>
              </Col>
              <Col style={{ maxWidth: "20%", paddingRight: "0px" }}>
                <Row>
                  <p>10 Responses</p>
                  <BookmarkBorderIcon />
                </Row>
              </Col>
            </Row>
          </div>
          <br></br>
        </div>
      </div>
    );
  }
}

export default ArticleByPerson;
