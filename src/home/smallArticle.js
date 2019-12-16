import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Media} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function SmallArticle() {
    return (
        <div className="small-card">
            <Media style={{ width: '350px' }}>
                <img
                  width={100}
                  height={100}
                  className="mr-3"
                  src={"https://imgur.com/download/p6gCwnY"}
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>Delete Your Slack Message Right Now. Here's How.</h5>
                  <br></br>
                  <p><span className="black">Dave Gershgorn in OneZero</span>
                    <br></br>Dec 6 . 3 min read
                  </p>
                </Media.Body>
              </Media>
        </div>
    );
}

export default SmallArticle;