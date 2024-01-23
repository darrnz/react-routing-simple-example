import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Store from "./components/Store";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import NotFound from "./components/NotFould";
import "./App.css";
import { useState } from "react";
export type IUserType = {
  name: string | undefined;
  userId: number | undefined;  
}
const App = () => {
  const [testUser, setTestUser] = useState<IUserType>({
    name: undefined,
    userId: undefined,
  });
  return (
    <>
      <NavBar testUser={testUser} setTestUser={setTestUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/store"
          element={
            <PrivateRoute>
              <Store />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={<Profile setTestUser={setTestUser} />}
        />
        <Route
          path="/profile/:userId"
          element={<Profile setTestUser={setTestUser} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
