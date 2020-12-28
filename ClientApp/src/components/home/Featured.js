import React from "react";

const Featured = (props) => {
  return (
    <div className="featured flex">
      <img src={`${props.imgPath}`} />
      <div>
        <ul>
          <li className="bold">{props.name}</li>
          <li className="mt-3">
            <b>Director:</b> {props.director}
          </li>
          <li>
            <b>Release date:</b> {props.releaseDate}
          </li>
          <li>
            <b>Rating:</b> {props.rating}
          </li>
          <li>
            <b>Description:</b> {props.description}
          </li>
        </ul>
      </div>
    </div>
  );
  return;
};

export default Featured;
