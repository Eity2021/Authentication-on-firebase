//import logo from "./logo.svg";
import "./App.css";
import {Routes, Route } from "react-router-dom";
import LogIn from "./Component/LogIn/LogIn";
import NotFound from "./Component/NotFound/NotFound";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Register from "./Component/Register/Register";
import Orders from "./Component/Orders/Orders";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Sell from "./Component/Sell/Sell";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/login" element={<LogIn />} />
        <Route path ="/sell" element={<RequireAuth><Sell /></RequireAuth>} />
        <Route path ="/orders" element={
        <RequireAuth>
          <Orders />
          </RequireAuth>
        } />
        <Route path ="register" element={<Register />} />
        <Route path ="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
