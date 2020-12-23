import React from "react";
import { useForm } from "react-hook-form";

const CreateDirector = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    fetch("/MovieDirectors/Create", {
      method: "POST",
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        age: parseInt(data.age),
      }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div>
      <h1>Create Director</h1>
      <form
        className="flex flex-column space-around h-200 w-300"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input name="firstName" placeholder="First Name" ref={register} />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          name="lastName"
          placeholder="Last Name"
          ref={register({ required: true })}
        />

        <input
          name="age"
          placeholder="Age"
          type="number"
          ref={register({ min: 18, max: 99, required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.lastName && <span>This field is required</span>}
        {errors.age && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateDirector;
