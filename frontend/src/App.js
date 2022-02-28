import "./App.css";
import { Fragment } from "react";
import { Routes, Route} from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/signup";

function App() {
  return (
    <Fragment>
      <Login />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Fragment>
  );
}

export default App;
