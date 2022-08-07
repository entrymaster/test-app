import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './Screens/Dashboard';
import Login from './Screens/Login';

function App() {

  return (
    <div className='App'>

      <Router>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App