import  { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
}

function DataFetcher() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const apiFetch = fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((data: Post[]) => {
        setData(data);
        setLoading(false);
      });
  useEffect(() => {
      apiFetch
  }, []);
  // it will run only on 1st render

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataFetcher;