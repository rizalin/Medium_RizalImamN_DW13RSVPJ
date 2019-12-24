import React, { Component } from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";
import Popovers from "./../dropdown/Popover";

const style = {
  logo: {
    height: "35px"
  }
};

class NewStory extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="story">
            <Row className="justify-content-between">
              <Col sm={2}>
                <Row
                  className="justify-content-between"
                  style={{
                    alignItems: "center",
                    fontSize: "13px",
                    maxWidth: "130px"
                  }}
                >
                  <a href="/">
                    <img
                      src={"https://medium.com/icons/monogram-mask.svg"}
                      style={style.logo}
                      alt="placeholder"
                    ></img>
                  </a>
                  <p style={{ marginBottom: 0 }}>Draft</p>
                  <p style={{ marginBottom: 0 }}>Saved</p>
                </Row>
              </Col>
              <Col sm={2}>
                <Row
                  className="justify-content-between"
                  style={{ alignItems: "center" }}
                >
                  <Button variant="success" size="sm" className="publish">
                    Publish
                  </Button>
                  <MoreHorizIcon style={{ fontSize: 25 }} />
                  <NotificationsNoneIcon style={{ fontSize: 25 }} />
                  <Popovers />
                </Row>
              </Col>
            </Row>
          </div>
          <div className="textArea">
            <Form.Control as="textarea" rows="1" />
            <br></br>
            <Form.Control as="textarea" rows="1" />
          </div>
        </div>
      </div>
    );
  }
}

export default NewStory;
