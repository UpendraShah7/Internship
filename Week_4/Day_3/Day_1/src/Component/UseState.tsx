import { useState } from "react";

type User = {
  name: string;
  age: number;
};

type Status = "idle" | "loading" | "done";

function Profile() {
  
  const [count, setCount] = useState(0);

  
  const [user, setUser] = useState<User | null>(null);

  
  const [tags, setTags] = useState<string[]>([]);


  const [status, setStatus] = useState<Status>("idle");
    
  
  const increment = () => setCount((prev) => prev + 1);

  
  const growOlder = () =>
    setUser((prev) => (prev ? { ...prev, age: prev.age + 1 } : prev));

  
  const addTag = () => setTags((prev) => [...prev, "react"]);

  const login = () => setUser({ name: "Ups", age: 22 });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>

      {user ? (
        <div>
          <p>{user.name} - {user.age}</p>
          <button onClick={growOlder}>Birthday</button>
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}

      <button onClick={addTag}>Add Tag</button>
      <p>Tags: {tags.join(", ")}</p>

      <p>Status: {status}</p>
      <button onClick={() => setStatus("loading")}>Start</button>
      <button onClick={() => setStatus("done")}>Finish</button>
    </div>
  );
}

export default Profile;