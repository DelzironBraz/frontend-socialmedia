import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='profile/:userId' element={<Profile />} />
      <Route path="/feed" element={<Home />} />
    </Routes>
  )
};

export default App;