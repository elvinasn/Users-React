import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const onAddHandler = (user) => {
    setUsers((prevState) => {
      return [...prevState, { ...user, id: Math.random().toString() }];
    });
  };
  return (
    <>
      <AddUser onAdd={onAddHandler} />
      <UsersList users={users} />
    </>
  );
}

export default App;
