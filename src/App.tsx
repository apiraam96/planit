import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("loading...");

  const fetchLogin = async () => {
    const response = await fetch("/api/login");
    const data = await response.json();
    console.log(data);
    setMessage(data.message);
  };
  useEffect(() => {
    fetchLogin();
  }, []);

  return <div>{message}</div>;
}

export default App;
