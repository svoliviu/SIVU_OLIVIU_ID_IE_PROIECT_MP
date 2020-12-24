import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Multiselect } from "multiselect-react-dropdown";

const CreateMovie = () => {
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();

  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);

  const [selectedActors, setSelectedActors] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const getActors = async () => {
    const response = await fetch(`/MovieActors`);
    const data = await response.json();

    setActors(data);
  };

  const getGenres = async () => {
    const response = await fetch(`/MovieGenres`);
    const data = await response.json();

    setGenres(data);
  };

  useEffect(() => {
    getActors();
    getGenres();
  }, []);

  const onSubmit = (data) => {
    const body = JSON.stringify({
      title: data.title,
      description: data.description,
      releaseDate: new Date(),
      rating: parseInt(data.rating),
      actors: selectedActors,
      genres: selectedGenres,
    });

    console.log(body);

    fetch("/Movies", {
      method: "POST",
      body: body,
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/movies"));
  };

  const onActorSelect = (options) => {
    let ids = [];

    for (let option of options) {
      ids.push(option.id);
    }

    setSelectedActors(ids);
  };

  const onActorRemove = (options) => {};

  const onGenreSelect = (options) => {
    let ids = [];

    for (let option of options) {
      ids.push(option.id);
    }

    setSelectedGenres(ids);
  };

  const onGenreRemove = (options) => {};

  return (
    <div>
      <h1>Create Movie</h1>
      <form
        className="flex flex-column space-around h-300 w-300"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input name="title" placeholder="Title" ref={register} />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          name="description"
          placeholder="Description"
          ref={register({ required: true })}
        />

        <input
          name="releaseDate"
          placeholder="Release Date"
          ref={register({ required: true })}
        />

        <input
          name="rating"
          placeholder="Rating"
          type="number"
          ref={register({ required: true, min: 1, max: 10 })}
        />

        <Multiselect
          placeholder="Select Actors"
          options={actors} // Options to display in the dropdown
          onSelect={(e) => onActorSelect(e)} // Function will trigger on select event
          onRemove={(e) => onActorRemove(e)} // Function will trigger on remove event
          displayValue="firstName" // Property name to display in the dropdown options
        />

        <Multiselect
          placeholder="Select Genres"
          options={genres} // Options to display in the dropdown
          onSelect={(e) => onGenreSelect(e)} // Function will trigger on select event
          onRemove={(e) => onGenreRemove(e)} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
        />

        {/* errors will return when field validation fails  */}
        {errors.description && <span>Description is required</span>}
        {errors.title && <span>Title is required</span>}
        {errors.releaseDate && <span>Release Date is required</span>}
        {errors.rating && <span>Rating is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateMovie;
