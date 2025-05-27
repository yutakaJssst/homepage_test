
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResearchPage from './pages/ResearchPage';
import LabPage from './pages/LabPage';
import AutoDrivingResearchPage from './pages/AutoDrivingResearchPage';
import MessagePage from './pages/MessagePage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/lab" element={<LabPage />} />
          <Route path="/research/auto-driving" element={<AutoDrivingResearchPage />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
