import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div style={{margin: '10px', height: '40px'}}>
      <input type="search" placeholder="search robots" onChange={searchChange} style={{backgroundColor: 'lightblue', height: '30px', borderRadius: '5px', width: '30vw'}}/>
    </div>
  );
};

export default SearchBox;
