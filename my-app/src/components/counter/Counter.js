import React, { useState } from "react";
import Count from "../Count";
import Button from "../Button";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div className="counter__container">
      <div className="counter__container__count">
        <div className="counter__container__count__element">
          <Count count={count} />
        </div>
        <div>
          {" "}
          <p className="counter__container__feedback">{feedback}</p>
        </div>
      </div>
      <div className="counter__btn">
        <Button increment={increment} />
      </div>
    </div>
  );
}

export default Counter;
