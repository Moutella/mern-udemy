import React from "react";

import UserList from "../component/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "1",
      name: "Moutella",
      image: "https://pbs.twimg.com/profile_images/1038597135711789059/WQQWHaxE_400x400.jpg",
      placeCount: 1
    }
  ];
  return <UserList items={USERS} />;
};

export default Users;
