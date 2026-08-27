import { useState } from 'react'
  
function Counter() {
    const [count , setCount] = useState(0);
    function handleIncrement():void{
        setCount(count + 1);
    }
     function handleDecrement():void{
        setCount(count - 1);
    }
  return (
    <div>
        <h1>Counter : {count} </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter
