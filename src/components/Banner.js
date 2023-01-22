import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';
import './Banner.css';


function Banner() {
    const [movie,setmovie]=useState([])
    useEffect(()=> {
        async function fetchData(){
            const request= await axios.get(requests.fetchNetflixOriginals);
            setmovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]
            );
            return request;
         } 
        fetchData();

    },[]);
    console.log(movie)
  return (
    <header className="banner" style={{
      backgroundSize:"cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center"
    }}>
        <div className="banner_contents">
          <h1 className="banner_title">
          {movie?.title|| movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My list</button>
            <h1 className="banner_description">{ movie?.overview}</h1>


          </div>
            
        </div>

    </header>
  )
}

export default Banner
