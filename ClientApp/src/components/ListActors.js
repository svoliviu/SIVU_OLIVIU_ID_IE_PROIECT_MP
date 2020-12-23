import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MovieActors = () => {
  const [actors, setActors] = useState([]);

  const getActors = async () => {
    const response = await fetch("/MovieActors");
    const data = await response.json();
    setActors(data);
  };

  useEffect(() => {
    getActors();
  }, []);

  const deleteActor = (id) => {
    fetch(`/MovieActors/${id}`, {
      method: "DELETE",
    }).then(() => getActors());
  };

  const renderActorsTable = (actors) => {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => (
            <tr key={actor.id}>
              <td>{actor.firstName}</td>
              <td>{actor.lastName}</td>
              <td>{actor.age}</td>
              <td>
                <Link to="/view-actor">
                  <button className="btn-primary mr-10">View</button>
                </Link>
                <Link to={`/edit-actor/${actor.id}`}>
                  <button className="btn-primary mr-10">Edit</button>
                </Link>
                <button
                  onClick={() => deleteActor(actor.id)}
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
      <h1 id="tabelLabel">Movie Actors</h1>
      {renderActorsTable(actors)}

      <Link to="/create-actor">
        <button className="btn-primary">Create</button>
      </Link>
    </div>
  );
};

export default MovieActors;
