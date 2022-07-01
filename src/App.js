import "./App.css";
import {
  HomePage,
  Login,
  Signup,
  Bookmark,
  Profile,
  Explore,
  Archive,
  Draft,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.users.theme);

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="app" data-theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/draft" element={<Draft />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
