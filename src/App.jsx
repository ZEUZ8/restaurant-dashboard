import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/admin" element={<DashboardPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App