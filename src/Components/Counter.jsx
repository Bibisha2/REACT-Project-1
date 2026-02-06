import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div id="counter" className="text-center py-10">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setCount(count + 1)}>Add</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setCount(count - 1)}>Decrease</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
