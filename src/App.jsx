// src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Registration from './Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home'; // Import Home
import Dashboard from './Dashboard'; // Import Dashboard

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;