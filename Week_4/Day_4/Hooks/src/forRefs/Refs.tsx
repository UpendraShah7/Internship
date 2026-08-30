// function Child() {
//   return <input />;
// }
// function Parent() {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus(); //  fails - inputRef.current is null
//   };

//   return (
//     <div>
//       <Child ref={inputRef} />  //ref is ignored by Child 
//       <button onClick={focusInput}>Focus</button>
//     </div>
//   );
// }


import { forwardRef, useRef } from "react";

const Child = forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} />;
});

function Refs() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus(); // works now
  };

  return (
    <div>
      <Child ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default Refs;