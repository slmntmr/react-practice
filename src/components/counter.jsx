import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Sayaç değeri için state tanımlanır

  const handleIncrement = () => {
    setCount(count + 1); // Sayaç değeri bir artırılır
  };

  return (
    <div>
      <h1>Counter: {count}</h1> {/* Sayaç değeri gösterilir */}
      <button onClick={handleIncrement}>Increment</button> {/* Düğmeye tıklayınca sayaç değeri artırılır */}
    </div>
  );
};

export default Counter;
