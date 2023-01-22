import React from "react";
import requests from "../requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function RowRouting() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedymovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horrormovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romancemovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default RowRouting;
