
// 1. Fetch users objects on app start - https://reqres.in/api/users +
// 2. Add "isLiked" field to each user object with initial value false +
// 3. Render list of the users using UserCard component +
// 4. Remove user from the list of the Users using onRemoveHandler +
// 5. Add logic for "Like" button, on each click it should change it's styles +
// Don't use:
// - if-else +
// - loops (for, while), use .map .filter ect. +

import { useEffect, useState } from "react";

const UserCard = ({ user, onRemoveHandler, handleLike }) => {
  return (
    <div>
      <h1>{user.email}</h1>
      <button onClick={() => onRemoveHandler(user.id)}>Remove</button>
      <span>{user.isLiked ? '❤' : ''}</span>
      <button onClick={() => handleLike(user.id)}>{user.isLiked ? "UnLike" : "Like"}</button>
    </div>
  )
};

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://reqres.in/api/users';
      try {
        const res = await fetch(url);
        const json = await res.json();

        const newUsers = json.data.map((user: any) => ({
          ...user,
          isLiked: false
        }));

        setUsers(newUsers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const onRemoveHandler = (userid: any) => {
    setUsers(prevUsers => prevUsers.filter((user) => user.id !== userid));
  };

  const handleLike = (userid) => {
    setUsers(prevusers => prevusers.map((user) => user.id === userid ? { ...user, isLiked: !user.isLiked } : user))
  };

  return (
    <div>
      {users?.map((user) => (
        <UserCard user={user} onRemoveHandler={onRemoveHandler} handleLike={handleLike} />
      ))}
    </div>
  )
}

export default App