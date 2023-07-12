import React from 'react';

const Pagination = ({ pageNumber, totalPages, onPageChange }) => {
  const handlePageChange = (newPageNumber) => {
    onPageChange(newPageNumber);
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(pageNumber - 1)} disabled={pageNumber === 1}>
        Previous
      </button>
      <button onClick={() => handlePageChange(pageNumber + 1)} disabled={pageNumber === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
