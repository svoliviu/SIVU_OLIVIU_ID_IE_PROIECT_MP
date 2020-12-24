import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateGenre = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    fetch("/MovieGenres", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
      }),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/genres"));
  };

  return (
    <div>
      <h1>Create Genre</h1>
      <form
        className="flex flex-column space-around h-200 w-300"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input name="name" placeholder="Name" ref={register} />

        {errors.name && <span>Name is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateGenre;
