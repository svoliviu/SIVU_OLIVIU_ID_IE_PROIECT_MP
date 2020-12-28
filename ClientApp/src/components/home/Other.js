import React from "react";
import Movie from "./Movie";

const Other = (props) => {
  return (
    <div className="other-row flex">
      {props.movieList.map((movie) => (
        <Movie
          key={movie.id}
          imgPath={`${process.env.PUBLIC_URL + "/" + movie.title + ".jpg"}`}
          title={movie.title}
          director={movie.director}
          cast={movie.cast}
          genres={movie.genres}
          rating={movie.rating}
        ></Movie>
      ))}
    </div>
  );
};

export default Other;
