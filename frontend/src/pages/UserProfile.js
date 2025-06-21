import React, { useEffect, useState } from 'react';
import { getUserById } from '../services/api';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id).then(res => setUser(res.data));
  }, [id]);

  return (
    <div>
      {user ? (
        <>
          <h2>{user.name}'s Profile</h2>
          <p>Email: {user.email}</p>
        </>
      ) : <p>Loading...</p>}
    </div>
  );
}

export default UserProfile;
