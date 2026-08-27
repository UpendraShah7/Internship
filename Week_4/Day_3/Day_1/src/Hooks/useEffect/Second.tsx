//useEffect  generates side effects.
//for example dom ko content load hune bittikai dbconnection banaune
//next one is project render huda kei kura garne like api call garne
//like count state update huda kei dekhaune


//first is side effect function
//second is cleanup function
//third is comma separated dependency list

import { useEffect, useState } from "react"


   
const Second = () => {
     const  [count , setCount] = useState(0);
     const  [total , setTotal] = useState(1);
    //variation 1 runs on every render
    // useEffect(() => {
    //   alert("I will run on each render")
    // })

    //varation 2 runs on first render
    // useEffect(() => {      
    // alert("I ll run on first render")  
    // },[])

    //variation 3 run every time when count is updated
    // useEffect(() => {      
    // alert("I ll run on when count is updated")  
    // },[count])

    //variation 4 runs on every depedency listed
    // useEffect(() => {      
    //     alert("I ll run on when count is updated")  
    // },[count , total])


    //variation 5 lets add cleanup function
    useEffect(() => {
        alert("count is updated");
      return () => {
            alert("count is unmounted from ui");
      }
    }, [count])
    
    
    const handleCount=(): void=>{
        setCount(count +1);
        
    };
    const handleTotal=(): void=>{
        setTotal(total +1);
        
    };
    
  return (
    <div>
      <button onClick={handleCount}>Count</button>
      <button onClick={handleTotal}>Total</button>
      <p>Count : {count} </p>
      <p>Total : {total} </p>
    </div>
  )
}

export default Second
