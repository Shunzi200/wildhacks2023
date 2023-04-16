import React, { useState } from 'react';
import Page1 from './page1';
import axios from 'axios';
import Page2 from './dashboard';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const variable = 'myVariable';

  axios.get(`/api/data/${variable}`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });




  const [countryName, setCountryName] = useState(" ");
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
