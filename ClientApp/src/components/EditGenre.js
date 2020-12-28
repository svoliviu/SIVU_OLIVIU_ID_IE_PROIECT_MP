import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditGenre = () => {
  const { id } = useParams();
  const history = useHistory();

  const { register, handleSubmit, errors, setValue } = useForm();

  const [genre, setGenre] = useState({});

  useEffect(() => {
    const getGenre = async () => {
      const response = await fetch(`/MovieGenres/${id}`);
      const data = await response.json();

      setGenre(data);
      setValue("name", data.name);
    };

    getGenre();
  }, []);

  const onSubmit = (data) => {
    fetch(`/MovieGenres/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: data.name,
      }),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/genres"));
  };

  return genre ? (
    <div>
      <h1>Edit Genre</h1>
      <form
        className="flex flex-column space-around h-200 w-300"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input name="name" placeholder="Name" ref={register} />

        {/* errors will return when field validation fails  */}
        {errors.firstName && <span>Name is required</span>}

        <input type="submit" />
      </form>
    </div>
  ) : null;
};

export default EditGenre;
