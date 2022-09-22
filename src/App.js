import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout'
import Home from './components/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
