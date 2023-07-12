import React from 'react';

const Card = ({ username, phone_number, email, insta_full_name, follower_count, following_count, verified_status }) => {
  return (
    <div className="card">
      <h3>{username}</h3>
      <p>Username: {username}</p>
      <p>Phone: {phone_number}</p>
      <p>Email: {email}</p>
      <p>Insta full name: {insta_full_name}</p>
      <p>Follower count: {follower_count}</p>
      <p>Following count: {following_count}</p>
      <p>Verified status: {verified_status}</p>
    </div>
  );
}

export default Card;
