//import logo from "./logo.svg";
import "./App.css";
import {Routes, Route } from "react-router-dom";
import LogIn from "./Component/LogIn/LogIn";
import NotFound from "./Component/NotFound/NotFound";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Register from "./Component/Register/Register";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="Login" element={<LogIn />} />
        <Route path ="register" element={<Register />} />
        <Route path ="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
