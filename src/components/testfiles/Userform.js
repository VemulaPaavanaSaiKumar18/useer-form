import React, { useState } from "react";

export const Userform = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [user, setuser] = useState([]);
  const getname = (event) => {
    setname(event.target.value);
  };
  const getage = (event) => {
    setage(event.target.value);
  };
  const submitHanduler = (event) => {
    event.preventDefault();
    let username = {
      name: name,
      age: age,
    };
    setuser((prevuser) => {
      return [...prevuser, username];
    });
    console.log(username);
  };
  return (
    <div>
      <div>
        <input type="text" placeholder="name" onChange={getname} />
        <input type="number" placeholder="age" onChange={getage} />
        <button onClick={submitHanduler}>SUBMIT</button>
      </div>
      <div>
        {user.map((data) => (
          <p>
            {data.name}({data.age} years old)
          </p>
        ))}
      </div>
    </div>
  );
};
