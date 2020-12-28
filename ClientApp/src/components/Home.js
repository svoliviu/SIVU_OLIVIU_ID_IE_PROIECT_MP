import React, { useState, useEffect } from "react";
import Featured from "./home/Featured";
import Other from "./home/Other";

const Home = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [featured, setFeatured] = useState({});

  const getMovies = async () => {
    const response = await fetch(`/Movies`);
    const data = await response.json();

    setMovieList(data);

    setFeatured(data[Math.floor(Math.random() * data.length)]);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <p>Welcome to your movie library</p>
      <h3>Featured</h3>
      <Featured
        imgPath={`${
          process.env.PUBLIC_URL + "/" + featured.title + "-wide.jpg"
        }`}
        name={featured.title}
        description={featured.description}
        director={featured.director}
        rating={featured.rating}
        releaseDate={featured.releaseDate}
      ></Featured>
      <h3>Other Movies</h3>
      <Other movieList={movieList}></Other>
    </div>
  );
};

export default Home;
