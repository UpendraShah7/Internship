import { useRef, useState } from "react"

function App() {
  const [count , setCount] = useState(0);
  // let val = 1;
  let val = useRef(0);
  function Increment():void{
    setCount( count +1 );
    val.current = val.current + 1;
  }

  return (
    <div>
      <button onClick={Increment}>Click me</button>
      <p>{count}</p>
      <p>{val.current}</p>
    </div>
  )
}

export default App
