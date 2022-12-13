import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegister from './Components/Authentication/UserRegister'
import Login  from "./Components/Authentication/Login";
import Payment from "./Components/payments/Payments";
import Logout from "./Components/Authentication/Logout";
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route exact path='/userregister' element={<UserRegister/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/payment' element={<Payment/>}></Route>
          <Route exact path='/logout' element={<Logout/>}></Route>
          <Route exact path='/' element={<Home/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
