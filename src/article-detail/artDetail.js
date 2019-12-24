import React from "react";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { Avatar } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import moment from "moment";

export default function ArtDetail(props) {
  const dates = new Date(props.time);
  const date = moment(dates).format("MMM DD, YYYY");
  return (
    <div>
      <div>
        <h1>{props.title}</h1>
        <br></br>
        <Row style={{ margin: "0px" }}>
          <Col style={{ padding: "0px" }}>
            <Row className="profile">
              <Avatar style={{ height: "50px", width: "50px" }}>A</Avatar>
              <Col className="profilTop">
                <div className="proText">
                  <p style={{ color: "black", fontWeight: "300px" }}>
                    {props.writer}
                  </p>
                  <Button variant="outline-success" size="sm">
                    Follow
                  </Button>
                </div>
                <div>
                  <p>
                    {date}. {props.id} min read
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            style={{ padding: "0px", margin: "15px 0px 0px", textAlign: "end" }}
          >
            <TwitterIcon />
            <LinkedInIcon />
            <FacebookIcon />
            <BookmarkBorderIcon />
          </Col>
        </Row>
        <br></br>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <br></br>
      </div>
    </div>
  );
}
