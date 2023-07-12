import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import GridContainer from '../components/GridContainer';
import Pagination from '../components/Pagination';
import '../App.css';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';

const SearchPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // setting default pagenumber and page size
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  
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
        <SearchBox pageNumber={pageNumber} pageSize={pageSize} setData={setData} setIsLoading={setIsLoading} />
        <div className="page-container">
          <GridContainer data={data} isLoading={isLoading} />
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






