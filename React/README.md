import React, { useState, useEffect } from 'react';

import './style.css';

// 1. Fetch users objects on app start - https://reqres.in/api/users
// 2. Add "isLiked" field to each user object with initial value false
// 3. Render list of the users using UserCard component
// 4. Remove user from the list of the Users using onRemoveHandler
// 5. Add logic for "Like" button, on each click it should change it's styles
// Don't use:
// - if-else
// - loops (for, while), use .map .filter ect.

//User object example
/*
avatar: "https://reqres.in/img/faces/1-image.jpg"
email: "george.bluth@reqres.in"
first_name: "George"
id: 1
last_name: "Bluth"
*/

// Component for rendering the user
const UserCard = ({
  avatar,
  email,
  firstName,
  id,
  lastName,
  isLiked,
  onRemove,
  onLikeHandler,
}) => (
  <div className="user-card">
    <h3>
      {firstName} {lastName}
    </h3>
    <img src={avatar} alt="user's avatar" />
    <p>Email - {email}</p>
    <button
      className={isLiked ? 'liked' : ''}
      onClick={onLikeHandler.bind(null, id)}
    >
      {isLiked ? 'Liked' : 'Like'}
    </button>
    <button onClick={onRemove.bind(null, id)}>Remove</button>
  </div>
);

export default function App() {
  const [users, setUsers] = useState([]);
  console.log(users);

  // Use this handler to remove user from the list
  const onRemoveHandler = (id) => {};

  // Use this handler to toggle user's isLiked property
  const onLikeHandler = (id) => {};

  return (
    <div className="App">
      {/* {render list of the users here using UserCard component} */}
    </div>
  );
}