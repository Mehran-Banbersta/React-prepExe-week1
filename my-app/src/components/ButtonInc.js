import React from "react";

function ButtonInc({ increment, decrement }) {
  return (
    <div>
      <button onClick={increment}>Add one!</button>
      {/* <button onClick={decrement}>remove one!</button> */}
    </div>
  );
}

export default ButtonInc;
