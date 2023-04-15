import React from 'react';

import './searchBar.css';

function searchBar() {
  return (
    <div className="container">
   
      <h1 style={{ fontFamily: 'Montserrat',  fontWeight: 800, color: "white"}}>Using data to solve climate change</h1>
      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default searchBar;
