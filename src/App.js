import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  const location = useLocation();

  console.log(location);
  return (
    <>
      <div
        className={`container-fluid bg-blue text-white text-center text-uppercase ${
          location.pathname === "/" ? "d-block" : "d-none"
        }`}
        id="hello"
      >
        Calculate the valuation of your busniess in just 15 minutes. Click here.
      </div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
