import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.error('Axios in React - Error:', error));
  }, []); // Empty dependency array ensures the effect runs once (on mount)

  return (
    <div>
      {loading ? 'Loading...' : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default AxiosExample;
