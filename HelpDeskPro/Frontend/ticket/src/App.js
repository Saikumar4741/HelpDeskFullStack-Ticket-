import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tickets from './components/Tickets';
import KnowledgeBase from './components/KnowledgeBase';
import LiveChat from './components/LiveChat';
import Analytics from './components/Analytics';
import Home from './components/Home';

const Dashboard = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/live-chat" element={<LiveChat />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
    </Router>
  );
};

export default Dashboard;
