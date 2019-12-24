import React, { Component } from "react";
import {
  CssBaseline,
  Typography,
  Container,
  Grid,
  Avatar,
  Link
} from "@material-ui/core";
import { Navbar, Nav, Card, Media, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function CategoryList(props) {
  return (
    <Nav.Link href={`/category/${props.id}`} style={{ width: "max-content" }}>
      {props.name}
    </Nav.Link>
  );
}

export default CategoryList;
