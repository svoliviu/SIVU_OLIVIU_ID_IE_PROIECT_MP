import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditDirector = () => {
  const { id } = useParams();

  const history = useHistory();

  const { register, handleSubmit, errors, setValue } = useForm();

  const [director, setDirector] = useState({});

  useEffect(() => {
    const getDirector = async () => {
      const response = await fetch(`/MovieDirectors/${id}`);
      const data = await response.json();

      setDirector(data);
      setValue("name", data.name);
      setValue("age", data.age);
    };

    getDirector();
  }, []);

  const onSubmit = (data) => {
    fetch(`/MovieDirectors/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: data.name,
        age: parseInt(data.age),
      }),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/directors"));
  };

  return director ? (
    <div>
      <h1>Edit Director</h1>
      <form
        className="flex flex-column space-around h-200 w-300"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* include validation with required or other standard HTML validation rules */}
        <input
          name="name"
          placeholder="Name"
          ref={register({ required: true })}
        />

        <input
          name="age"
          placeholder="Age"
          type="number"
          ref={register({ min: 18, max: 99, required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.name && <span>Name is required</span>}
        {errors.age && <span>Age is required</span>}

        <input type="submit" />
      </form>
    </div>
  ) : null;
};

export default EditDirector;
