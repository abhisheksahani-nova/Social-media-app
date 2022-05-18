import "./App.css";
import { HomePage, Login, Signup } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman/>} />
      </Routes>
    </div>
  );
}

export default App;
