/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { useId } from "react";

import { memo, useState } from "react";

// function Input(props) {
//   const { id = "input", label } = props;
//   const inputId = useId();

//   return (
//     <>
//       <label htmlFor={`${inputId}-${id}`}>
//         <span>{label}</span>
//         <input type="text" id={`${inputId}-${id}`} />
//       </label>
//       <p aria-details={`${inputId}-${id}`}>
//         Name should contain at least first name and last name
//       </p>
//     </>
//   );
// }

const TodoList = memo((props) => {
  const { todos } = props;
  console.log("call to do list");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={`${todo}-${index}`}>{todo}</p>;
      })}
    </>
  );
});

TodoList.displayName = "TodoList";

const Counter = memo((props) => {
  const { count } = props;

  console.log("call counter");
  return <p> Count: {count}</p>;
});

Counter.displayName = "Counter";

function ExampleMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["coding", "playing game"]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <>
      {/* <div className="">
        <input type="text" id={inputId} />
        <Input id="FirstName" label="First Name" />
        <Input id="FirstName" label="First Name" />
        <Input id="LastName" label="Last Name" />
        <Input id="Email" label="Email" />
        <Input />
        <Input />
        <Input />
      </div> */}

      <TodoList todos={todos} />
      <button onClick={() => addTodo("make video")}>Add Todo</button>
      <Counter count={count} />
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default ExampleMemo;
