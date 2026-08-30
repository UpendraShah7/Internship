//1. DOM ref — points to an actual HTML element
//2. Mutable value ref — just a box to store any value across renders

//Qns2 Why null as initial value? & Why the generic <HTMLInputElement>?
// nothing here yet react fills in the real element after mount.
// needs to know what type .current will eventually hold

//Ref object and mutableRef object
import { useRef, useEffect } from "react";

function Dom() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input on mount
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.style.backgroundColor = "green";
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here" />
      <button onClick={handleClick}>Highlight & Select</button>
    </div>
  );
}

export default Dom;