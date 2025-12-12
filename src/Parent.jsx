import React from "react";
import Child from "./Child";
export default function Parent() {
  const handleOrderReady = (tableNumber) => {
    console.log(`Table ${tableNumber} is ready!`);
  };
  return (
    <div>
      <h2>Restaurant Manager (Parent)</h2>
      <Child tableNumber={5} onOrderReady={handleOrderReady} />
    </div>
  );
}
