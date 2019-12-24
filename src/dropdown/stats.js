import React, { Component } from "react";
import { Tab, Nav, Col, Row } from "react-bootstrap";
import HeaderMedium from "./../header/headermedium";

class Stats extends Component {
  render() {
    return (
      <div>
        <div className="headerN">
          <HeaderMedium />
        </div>
        <br></br>
        <br></br>
        <h1>Stats</h1>
        <h2>Click story below to view detailed stats</h2>
        <div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <p>
                      If thy soul check thee that I come so near, Swear to thy
                      blind soul that I was thy 'Will', And will, thy soul
                      knows, is admitted there; Thus far for love, my love-suit,
                      sweet, fulfil. 'Will', will fulfil the treasure of thy
                      love, Ay, fill it full with wills, and my will one. In
                      things of great receipt with ease we prove Among a number
                      one is reckon'd none: Then in the number let me pass
                      untold, Though in thy store's account I one must be;
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>
                      If thy soul check thee that I come so near, Swear to thy
                      blind soul that I was thy 'Will', And will, thy soul
                      knows, is admitted there; Thus far for love, my love-suit,
                      sweet, fulfil. 'Will', will fulfil the treasure of thy
                      love, Ay, fill it full with wills, and my will one. In
                      things of great receipt with ease we prove Among a number
                      one is reckon'd none: Then in the number let me pass
                      untold, Though in thy store's account I one must be;
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
}

export default Stats;
