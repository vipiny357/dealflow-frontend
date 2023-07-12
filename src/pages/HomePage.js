import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import GridContainer from '../components/GridContainer';
import Pagination from '../components/Pagination';
import '../App.css'
import Header from '../components/Header';

const HomePage = () => {
    const [data, setData] = useState([]);
    // setting default pagenumber and page size
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    // url to fetch from api
    const url = `http://127.0.0.1:8000/freelancers?page_number=${pageNumber}&page_size=${pageSize}`

    useEffect(() => {
      fetch(url)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(response.statusText);
          }
  
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log(error);
          // Display the error to the user
          alert(error.message);
        });
    }, [url,pageNumber, pageSize]);

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
            <Link id="search-button" to="/search" className="search-button">
          Search
        </Link>
        <div className="page-container">
          <GridContainer data={data} />
          <Pagination
            pageNumber={pageNumber}
            totalPages={data.totalPages}
            onPageChange={handlePageChange}
          />
          
          <div className="page-size-menu">
          <span>Current Page Number: {pageNumber}</span><span>Page Size:</span>
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
    }
    
    export default HomePage;