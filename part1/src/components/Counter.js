import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <div
        style={{
          position: "relative",
          padding: "60px",
          marginLeft: "25%",
          fontSize: "2rem",
        }}
      >
        {num}
      </div>
      <button
        style={{ backgroundColor: "green", padding: "10px", marginLeft: "20%", fontSize:"1.25rem" }}
        onClick={() => {
          setNum(num + 1);
        }}
      >
        plus
      </button>
      <button
        style={{ backgroundColor: "red", padding: "10px", marginLeft: "20%", fontSize:"1.25rem" }}
        onClick={() => {
          setNum(num - 1);
        }}
      >
        minus
      </button>
    </div>
  );
};

export default Counter;
