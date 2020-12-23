import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditActor = () => {
  const { id } = useParams();
  const history = useHistory();

  const { register, handleSubmit, errors, setValue } = useForm();

  const [actor, setActor] = useState({});

  useEffect(() => {
    const getActor = async () => {
      const response = await fetch(`/MovieActors/${id}`);
      const data = await response.json();

      setActor(data);
      setValue("firstName", data.firstName);
      setValue("lastName", data.lastName);
      setValue("age", data.age);
      setValue("nationality", data.nationality);
    };

    getActor();
  }, []);

  const onSubmit = (data) => {
    fetch(`/MovieActors/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        age: parseInt(data.age),
        nationality: data.nationality,
      }),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/actors"));
  };

  return actor ? (
    <div>
      <h1>Edit Actor</h1>
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

        <input
          name="nationality"
          placeholder="Nationality"
          ref={register({ required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.firstName && <span>First Name is required</span>}
        {errors.lastName && <span>Last Name is required</span>}
        {errors.age && <span>This field is required</span>}
        {errors.nationality && <span>Nationality is required</span>}

        <input type="submit" />
      </form>
    </div>
  ) : null;
};

export default EditActor;
