import React from "react";

import UserList from "../component/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "1",
      name: "João Gabriel Moutella",
      image: "https://avatars3.githubusercontent.com/u/19677195?s=460&v=4",
      places: "7"
    }
  ];
  return <UserList items={USERS} />;
};

export default Users;
