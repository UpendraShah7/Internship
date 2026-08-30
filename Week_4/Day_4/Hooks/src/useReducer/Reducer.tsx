//           const [state, dispatch] = useReducer(reducerFunction, initialState); 
//           function reducer(state, action) {
//                decide new state based on action
//           return newState;
//           }
//          dispatch send action to reducerFunction


import { useReducer } from "react";

interface State {
  count: number;
}

type Action = { type: "increment" | "decrement" | "reset" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Reducer;