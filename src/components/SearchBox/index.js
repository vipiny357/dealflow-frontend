import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ pageNumber, pageSize, setData, setIsLoading }) => {
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

  // Filter function
  const handleSearch = (params) => {
    console.log(params)
    const queryParams = Object.entries(params)
      .filter(([key, value]) => value !== '') // Filter out parameters with empty values as api expects only valid parameters
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

      if(!queryParams) return;

    const url = `http://127.0.0.1:8000/freelancers/search?${queryParams}&page_number=${pageNumber}&page_size=${pageSize}`;
    setIsLoading(true)
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then((data) => {
        setData(data);
      }).catch((error) => {
        console.log(error);
        // Display the error to the user
        alert(error.message);
      }).finally(()=>setIsLoading(false));
  };


  React.useEffect(()=>{
    handleSearch(searchParams);
  }, [pageNumber, pageSize])

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
      <button className="btn" onClick={()=>handleSearch(searchParams)}>Search</button>
    </div>
  );
};

export default SearchBox;
