import React from 'react';
import Card from '../Card';

const Grid = ({ data }) => {
  return (
    <div className="grid-container">
      {data.map((person, index) => (
        <Card
          key={index}
          username={person.username}
          phone_number={person.phone_number}
          email={person.email}
          insta_full_name={person.insta_full_name}
          follower_count={person.follower_count}
          following_count={person.following_count}
          verified_status={person.verified_status}
        />
      ))}
    </div>
  );
}

export default Grid;
