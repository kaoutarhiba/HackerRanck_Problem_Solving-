import React, { useState, useEffect } from 'react';

function FetchExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error('Fetch in React - Error:', error));
  }, []); // Empty dependency array ensures the effect runs once (on mount)

  return (
    <div>
      {loading ? 'Loading...' : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default FetchExample;
