import React from 'react';
import Grid from '../Grid';

const GridContainer = ({ data }) => {
  return (
    <div>
      {data.length > 0 ? (
        <Grid data={data} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default GridContainer;
