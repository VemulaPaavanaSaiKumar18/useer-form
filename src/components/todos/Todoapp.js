import React, { useState } from "react";
let count = 0;
export const Todoapp = () => {
  const [task, settask] = useState("");
  const [todo, settodo] = useState([]);
  const onsubmit = (event) => {
    event.preventDefault();
    settodo((prevstodo) => {
      settask("");
      return [...prevstodo, { todo: task, id: count++ }];
    });
  };
  const deletehanduler = (itemID) => {
    settodo((prevstodo) => prevstodo.filter((item) => item.id !== itemID));
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <input
          type="text"
          placeholder="addtodo"
          value={task}
          onChange={(event) => {
            settask(event.target.value);
          }}
        />
        <button type="submit">Addtodo</button>
      </form>
      <ul>
        {todo.map((item) => (
          <div key={item.id}>
            <li>{item.todo}</li>
            <button onClick={() => deletehanduler(item.id)}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
