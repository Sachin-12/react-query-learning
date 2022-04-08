import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";

function Mutations() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const addActor = (actorData) => {
    return axios.post("http://localhost:4000/actors", actorData);
  };
  const { mutate } = useMutation(addActor);
  return (
    <>
      <div>Mutations</div>
      <form onSubmit={() => mutate({ name, age })}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Add Actor</button>
      </form>
    </>
  );
}

export default Mutations;
