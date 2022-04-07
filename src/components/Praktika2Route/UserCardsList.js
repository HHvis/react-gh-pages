import React, {useState, useEffect} from "react";
import UserCard from './UserCard';

const url = "https://api.github.com/users";

const UserCardsList = () => {
  const [users, setUsers] = useState([]);
  
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.timeLog(users);
  };
  useEffect (() => {
    getUsers();
  }, []);

  let usersCardList = users.map((user) => {
    return (
      <UserCard
      key={user.id}
      id={user.id}
      avatar_url={user.avatar_url}
      login={user.login}
      />
    );
  });

  return (
    <div className="container">
      <div className="row">{usersCardList}</div>
    </div>
  );
};

export default UserCardsList;