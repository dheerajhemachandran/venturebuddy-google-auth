import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <div
        className="container-fluid bg-blue text-white text-center text-uppercase"
        id="hello"
      >
        Calculate the valuation of your busniess in just 15 minutes. Click here.
      </div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
