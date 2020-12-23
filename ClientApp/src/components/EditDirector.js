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
      const response = await fetch(`/MovieDirectors/One/${id}`);
      const data = await response.json();

      setDirector(data);
      setValue("firstName", data.firstName);
      setValue("lastName", data.lastName);
      setValue("age", data.age);
    };

    getDirector();
  }, []);

  const onSubmit = (data) => {
    fetch(`/MovieDirectors/One/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
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
  ) : null;
};

export default EditDirector;
