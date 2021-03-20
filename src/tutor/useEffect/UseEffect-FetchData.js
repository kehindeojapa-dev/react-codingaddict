import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const usersData = await response.json();
    setUsers(usersData);
    // console.log(usersData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, html_url, login, avatar_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
