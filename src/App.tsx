import { useState } from 'react';

interface CounterProps {
}

const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = useState(74);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold mb-4">{count}</h1>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;