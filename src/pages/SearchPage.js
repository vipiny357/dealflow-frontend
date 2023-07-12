import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import GridContainer from '../components/GridContainer';
import Pagination from '../components/Pagination';
import '../App.css';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';

const SearchPage = () => {
  const [data, setData] = useState([]);
  // setting default pagenumber and page size
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  // Filter function
  const handleSearch = (params) => {
    const queryParams = Object.entries(params)
      .filter(([key, value]) => value !== '') // Filter out parameters with empty values as api expects only valid parameters
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

    const url = `http://127.0.0.1:8000/freelancers/search?${queryParams}&page_number=${pageNumber}&page_size=${pageSize}`;

    return fetch(url)
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
      });
  };

  // handling pagination through pagination component
  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value));
  };

  return (
    <div>
      <Header />
      <div className="main-content">
        <h1 className="bold-heading">Freelancers</h1>
        <Link id="home-page-button" to="/" className="home-page-button">
          All Freelancers
        </Link>
        <SearchBox onSearch={handleSearch} />
        <div className="page-container">
          <GridContainer data={data} />
          <Pagination
            pageNumber={pageNumber}
            totalPages={data.totalPages}
            onPageChange={handlePageChange}
          />
          <div className="page-size-menu">
          <span>Current Page Number: {pageNumber}</span> <span>Page Size:</span>
            <select value={pageSize} onChange={handlePageSizeChange}>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;






