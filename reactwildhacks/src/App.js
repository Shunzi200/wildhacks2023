import React, { useState } from 'react';
import Page1 from './page1';
import Page2 from './dashboard';

function App() {
  const [countryName, setCountryName] = useState(" a");
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageSwitchOne = () => {
    setCurrentPage(1);
  };

  const handlePageSwitchTwo = () => {
    setCurrentPage(2);
  };

  return currentPage === 1 ? (
    <Page1
      onSwitchPage={handlePageSwitchOne}
      onSwitchPage2={handlePageSwitchTwo}
      countryName={countryName}
      setCountryName={setCountryName} 
    />
  ) : (
    <Page2
      onSwitchPage={handlePageSwitchOne}
      onSwitchPage2={handlePageSwitchTwo}
      countryName={countryName}
      setCountryName={setCountryName} 
    />
  );
}

export default App;
