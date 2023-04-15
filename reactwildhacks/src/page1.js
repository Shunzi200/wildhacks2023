import React from 'react';
import SearchBar from './searchBar';
import background1 from './assets/tree2.png';

function page1() {
  return (
    <div style={{ position: 'relative', backgroundColor: '#07bbf2', minHeight: '100vh' }}>
      <img
        src={background1}
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <SearchBar />
      </div>
    </div>
  );
}

export default page1;
