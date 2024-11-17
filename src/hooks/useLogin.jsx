import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const username = getUsername(token);
      setUsername(username);
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
};
