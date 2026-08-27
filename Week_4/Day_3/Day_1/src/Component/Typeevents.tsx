import React from 'react'

function Typeevents() {
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("target:", e.target);               // could be <img> or <button>
    console.log("currentTarget:", e.currentTarget);  // always <button>

    
  }

  return (
    <button onClick={handleClick}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHVHi-LViwTpYVjYXMhZ2Y_2-1Xm2NNY0kN2PisjiEjdbaXjRakGHS7w&s=10" alt="star" width={16} />
      Click Me
    </button>
  );
}

export default Typeevents
