import React, { useReducer, useState } from "react";
import { disableIncrementalParsing } from "typescript";

const initialState = { count: 0 };

// function reducer(state: any, action: any) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

function Counter() {
  //const [state, dispatch] = useReducer(reducer, initialState);
  const [state, setState] = useState(initialState);

  const incrementar = () => {
    setState({ count: state.count + 1 });
  };

  const decrementar = () => {
    setState({ count: state.count - 1 });
  };

  const multiplicar = () => {
    setState({ count: state.count * 10 });
  };

  return (
    <>
      Count: {state.count}
      {/* <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button> */}
      <button onClick={() => incrementar()}>-</button>
      <button onClick={() => decrementar()}>+</button>
    </>
  );
}

export default Counter;
