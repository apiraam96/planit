import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";

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

  return (
    <>
      <SearchBar />
      <div className="text-red-500">{message}</div>
    </>
  );
}

export default App;
