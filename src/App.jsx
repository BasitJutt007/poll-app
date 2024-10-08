import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MultiStepForm from './components/MultiStepForm';
import Summery from './components/Summery';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MultiStepForm />} />
        <Route path="/summary" element={<Summery />} />
      </Routes>
    </Router>
  );
};

export default App;
