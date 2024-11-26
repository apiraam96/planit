import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

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
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
