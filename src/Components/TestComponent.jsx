import { useEffect, useState } from "react";

const TestComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
  }, [count]);

  const increaseCountFunction = () => {
    setCount(count + 1);
  };
  const decreaseCountFunction = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>The COUNT IS {count} </div>
      <button className="bg-red-200 p-2" onClick={increaseCountFunction}>
        INcrease COunt
      </button>
      <button className="bg-slate-200 p-2" onClick={decreaseCountFunction}>
        Decrease COunt
      </button>
    </>
  );
};

export default TestComponent;
