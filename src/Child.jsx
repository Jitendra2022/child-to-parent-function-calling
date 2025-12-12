import React from "react";
export default function Child({ tableNumber, onOrderReady }) {
  return (
    <div>
      <h3>Waiter (Child)</h3>
      <button onClick={() => onOrderReady(tableNumber)}>
        Notify Manager Table Ready
      </button>
    </div>
  );
}
