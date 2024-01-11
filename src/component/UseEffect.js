import { useState, useEffect } from 'react';

function Example2() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://my-api.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data ? <p>Data: {data}</p> : <p>Loading...</p>}
    </div>
  );
}
export default Example2;

