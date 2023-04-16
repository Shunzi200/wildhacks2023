import React from 'react';
import ClimateChangeApp from './searchBar';
import background1 from './assets/tree2.png';
import Page1 from './page1';
import axios from 'axios';

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

  return (
    <div>
      <p>{!data ? "Loading..." : data}</p>
      <Page1 />
    </div>
  );
}

export default App;
