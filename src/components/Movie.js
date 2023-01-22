import React from "react";
import Comment from "./Comment";
import './movie.css';
import Ratings from "./Ratings";
import { Container } from 'react-bootstrap'
function Movie(props) {
  console.log("in movie path");
  return (
  <div className="movie">
    <Container>
    <div class="ratio ratio-21x9">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/j_MuZmJNirw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </Container>
    <div >
      <Ratings></Ratings>
    </div>
    <div>
    <Comment/>
    </div>
    </div>
  )
    
}

export default Movie;