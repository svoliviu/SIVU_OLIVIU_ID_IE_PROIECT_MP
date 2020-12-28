import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateActor = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    fetch("/MovieActors", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        age: parseInt(data.age),
        nationality: data.nationality,
      }),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/actors"));
  };

  return (
    <div>
      <h1>Create Actor</h1>
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

        <input
          name="nationality"
          placeholder="Nationality"
          ref={register({ required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.name && <span>Name is required</span>}
        {errors.age && <span>Age is required</span>}
        {errors.nationality && <span>Nationality is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateActor;
