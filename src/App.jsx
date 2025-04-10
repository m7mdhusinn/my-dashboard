import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MyTasks from './pages/MyTasks';
import TaskDetail from './pages/TaskDetail';
import CalendarPage from './pages/CalendarPage';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<MyTasks />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
      </Routes>
    </Router>
  );
}
