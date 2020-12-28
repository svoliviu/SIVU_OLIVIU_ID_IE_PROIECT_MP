import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const MovieDirectors = () => {
  const [directors, setDirectors] = useState([]);

  const getDirectors = async () => {
    const response = await fetch("/MovieDirectors");
    const data = await response.json();
    setDirectors(data);
  };

  useEffect(() => {
    getDirectors();
  }, []);

  const deleteDirector = (id) => {
    fetch(`/MovieDirectors/${id}`, {
      method: "DELETE",
    }).then(() => getDirectors());
  };

  const renderDirectorsTable = (directors) => {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {directors.map((director) => (
            <tr key={director.id}>
              <td>{director.name}</td>
              <td>{director.age}</td>
              <td>
                <Link to={`/edit-director/${director.id}`}>
                  <button className="btn-primary mr-10">Edit</button>
                </Link>
                <button
                  onClick={() => deleteDirector(director.id)}
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
      <h1 id="tabelLabel">Movie Directors</h1>
      {renderDirectorsTable(directors)}

      <Link to="/create-director">
        <button className="btn-primary">Create</button>
      </Link>
    </div>
  );
};

export default MovieDirectors;
