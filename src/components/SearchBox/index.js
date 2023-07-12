import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    username: '',
    insta_full_name: '',
    follower_count: '',
    following_count: '',
    verified_status: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    onSearch(searchParams);
  };

  return (
    <div className="search-box">
      <h3>Search Freelancers</h3>
      <div className="search-params">
        <div>
          <label>First Name:</label>
          <input type="text" name="first_name" value={searchParams.first_name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="last_name" value={searchParams.last_name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={searchParams.email} onChange={handleInputChange} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="phone_number" value={searchParams.phone_number} onChange={handleInputChange} />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={searchParams.username} onChange={handleInputChange} />
        </div>
        <div>
          <label>Instagram Full Name:</label>
          <input type="text" name="insta_full_name" value={searchParams.insta_full_name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Follower Count:</label>
          <input type="text" name="follower_count" value={searchParams.follower_count} onChange={handleInputChange} />
        </div>
        <div>
          <label>Following Count:</label>
          <input type="text" name="following_count" value={searchParams.following_count} onChange={handleInputChange} />
        </div>
        <div>
          <label>Verified Status:</label>
          <input type="text" name="verified_status" value={searchParams.verified_status} onChange={handleInputChange} />
        </div>
      </div>
      <button className="btn" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
