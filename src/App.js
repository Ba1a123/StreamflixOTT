import "./App.css";
import React from "react";
import requests from "./requests";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Movie from "./components/Movie";
import { Router, Route, Routes } from "react-router-dom";
import RowRouting from "./components/RowRouting";
import Comment from "./components/Comment";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RowRouting />} />
        <Route path="/movie" element={<Movie id={23} />} />
      </Routes>
    </div>
  );
}

export default App;
