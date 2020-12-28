import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MovieGenres = () => {
  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    const response = await fetch("/MovieGenres");
    const data = await response.json();
    setGenres(data);
  };

  useEffect(() => {
    getGenres();
  }, []);

  const deleteGenre = (id) => {
    fetch(`/MovieGenres/${id}`, {
      method: "DELETE",
    }).then(() => getGenres());
  };

  const renderGenresTable = (genres) => {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre) => (
            <tr key={genre.id}>
              <td>{genre.name}</td>
              <td>
                <Link to={`/edit-genre/${genre.id}`}>
                  <button className="btn-primary mr-10">Edit</button>
                </Link>
                <button
                  onClick={() => deleteGenre(genre.id)}
                  className="btn-primary mr-10"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1 id="tabelLabel">Movie Genres</h1>
      {renderGenresTable(genres)}

      <Link to="/create-genre">
        <button className="btn-primary">Create</button>
      </Link>
    </div>
  );
};

export default MovieGenres;
