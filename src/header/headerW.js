import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
import { Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";
import Popovers from "./../dropdown/Popover";

const style = {
  logo: {
    height: "35px"
  }
};

class HeaderW extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <div style={{ borderBottom: "solid #f1f1f1 2px" }}>
            <div className="kontainers">
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <a href="/">
                  <img
                    src={"https://medium.com/icons/monogram-mask.svg"}
                    style={style.logo}
                    alt="placeholder"
                  ></img>
                </a>
                <div style={{ padding: "20px 0" }}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    style={{ width: "200px" }}
                  >
                    <SearchIcon style={{ fontSize: 25 }} />
                    <NotificationsNoneIcon style={{ fontSize: 25 }} />
                    <Button
                      variant="outline-dark"
                      size="sm"
                      style={{ marginRight: "10px" }}
                    >
                      Upgrade
                    </Button>
                    <Popovers />
                  </Grid>
                </div>
              </Grid>
            </div>
          </div>
          <div
            className="kontainers"
            style={{ maxHeight: "55px", padding: "8px 0" }}
          >
            <Row>
              <Col md lg="2">
                <img
                  src={
                    "https://s39jk6x0eh-flywheel.netdna-ssl.com/wp-content/uploads/2018/11/MISSION-Logo-Black-1-1024x249.png"
                  }
                  style={{ maxHeight: "36px" }}
                  alt="placeholder"
                ></img>
              </Col>
              <Col md lg="3" style={{ padding: "10px 0" }}>
                <h5 style={{ color: "#757575", fontWeight: "normal" }}>
                  MISSION ORIGINAL <span style={{ padding: "0 10px" }}>|</span>
                  SUBSCRIBE
                </h5>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default HeaderW;
