import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Media } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function HomeArticle() {
    return (
        <div>
            <Media className="big-card">
                <Media.Body>
                    <h3>MENTAL HEALTH <span className="italic">Popular topic</span></h3>
                    <h4>Want a Happier, More Fulfilling life? 75-year Harvard Study Says Focus on This 1 Thing</h4>
                    <p>
                        A Google search for "secret to happiness" return 7,500,000+ results. That's a lot of people searching for something Harvard already found.
                    </p>
                    <br></br>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                    >
                        <p><span className="black">Patrick Ewers in Better Humans</span> <br></br>
                            Sep 30 . 3 min read</p>
                        <div>
                            <BookmarkBorderIcon style={{ fontSize: 25 }} />
                            <MoreHorizIcon style={{ fontSize: 25 }} />
                        </div>
                    </Grid>
                </Media.Body>
                <img
                    width={150}
                    height={170}
                    className="ml-3"
                    src={"https://imgur.com/download/vRUSjFt"}
                    alt="Generic placeholder"
                />
            </Media>
            <br></br>
            <br></br>
        </div>
    );
}

export default HomeArticle;