// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from './Components/Add'
import Data from './Components/Data'
import UserRegister from './Components/Authentication/UserRegister'
import Login  from "./Components/Authentication/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Data />} />
          <Route path="/add" element={<Add />} /> */}
          <Route exact path='/userregister' element={<UserRegister/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
