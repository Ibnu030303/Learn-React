import { useState, useMemo } from "react";

const calculation = (num) => {
  console.log("call calculation");
  for (let i = 0; i < 1000000; i++) {
    num += 1;
  }
  return num;
};

const ExampleUseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // Use useMemo to prevent unnecessary recalculations
  const result = useMemo(() => calculation(count), [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, "New Todo"]);
  };

  return (
    <div className="example-use-memo">
      <div>
        <h2>Todos</h2>
        <button onClick={addTodo}>Add Todo</button>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
      </div>

      <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
      </div>

      <h2>Calculation Result:</h2>
      <p>{result}</p>
    </div>
  );
};

export default ExampleUseMemo;
