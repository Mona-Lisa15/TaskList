import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import UsersPage from "./pages/UsersPage";
import './App.css';

const App = () => (
  <Router>
    <nav>
      <Link to="/">Tasks</Link> | <Link to="/users">Users</Link>
    </nav>
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  </Router>
);

export default App;
