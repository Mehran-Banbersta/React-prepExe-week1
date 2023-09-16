import React from "react";

function ButtonDec({ decrement }) {
  return (
    <div>
      <button onClick={decrement}>remove one!</button>
      {/* <button onClick={decrement}>remove one!</button> */}
    </div>
  );
}

export default ButtonDec;
