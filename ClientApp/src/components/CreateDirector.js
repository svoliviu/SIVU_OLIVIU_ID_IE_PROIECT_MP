import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const CreateDirector = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    fetch("/MovieDirectors", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        age: parseInt(data.age),
      }),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/directors"));
  };

  return (
    <div>
      <h1>Create Director</h1>
      <form
        className="flex flex-column space-around h-200 w-300"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input name="name" placeholder="Name" ref={register} />

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
  );
};

export default CreateDirector;
