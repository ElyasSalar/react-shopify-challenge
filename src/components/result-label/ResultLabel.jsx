import React from 'react';

function ResultLabel({title, year, poster}){
  return (
    <>
      <img src={poster} alt="poster" />
      <h3>{title}</h3>
      <p>{year}</p>
    </>
  )
}

export default ResultLabel;