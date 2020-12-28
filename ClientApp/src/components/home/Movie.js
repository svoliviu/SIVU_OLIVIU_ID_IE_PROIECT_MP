import React, { useEffect, useState } from "react";

const Movie = (props) => {
  const [cast, setCast] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    setCast(props.cast.join());
    setGenre(props.genres.join());
  }, []);

  return (
    <div className="movie mr-20">
      <img src={`${props.imgPath}`} />
      <div className="">
        <ul>
          <li>
            <b>{props.title}</b>
          </li>
          <li className="mt-3">
            <b>Director:</b> {props.director}
          </li>
          <li>
            <b>Cast:</b> {cast}
          </li>
          <li>
            <b>Genre:</b> {genre}
          </li>
          <li>
            <b>Rating:</b> {props.rating}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Movie;
