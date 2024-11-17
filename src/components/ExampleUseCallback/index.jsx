import { useCallback, useState } from "react";
import Search from "./Search";

const dataUsers = ["Ibnu", "Budi", "Reza"];

const ExampleUseCallback = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(dataUsers);

  const handleIncrement = () => {
    setCount((c) => c + 1);
  };

  const handleSearch = useCallback(
    (text) => {
      const filteredUsers = users.filter((user) =>
        user.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredUsers);
    },
    [users]
  );

  const shuffle = (arr) => {
    return [...arr].sort(() => 0.5 - Math.random());
  };

  return (
    <div className="example-use-callback">
      <div>
        <h4>Count: {count}</h4>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <br />

      <div>
        <Search onChange={handleSearch} />

        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>

      <button onClick={() => setUsers(shuffle(users))}>Shuffle</button>
    </div>
  );
};

export default ExampleUseCallback;
