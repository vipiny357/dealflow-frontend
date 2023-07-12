import React from 'react';
import Grid from '../Grid';

const GridContainer = ({ data, isLoading }) => {
  React.useEffect(()=>console.log(isLoading), [])
  return (
    <>
      {isLoading? <p>Loading data...</p> : data.length > 0 ? (
        <Grid data={data} />
      ) : (
        <></>
      )}
    </>
  );
}

export default GridContainer;
