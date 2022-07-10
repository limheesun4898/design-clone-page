import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './pages/Introduction';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          {/* <Route path="/" element={<Introduction />} /> */}
          <Route path="/introduction" element={<Introduction />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
