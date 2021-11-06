import React, { useState, Fragment } from "react";

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString}]
    });
  }

  // 1 <></>
  // 2 <React.Fragment></React.Fragment>
  // 3 Import Fragment then <Fragment></Fragment>
  // 4 Create Wrapper.js then <Wrapper></Wrapper>

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
