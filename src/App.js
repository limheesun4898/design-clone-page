import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './pages/Introduction';

function App() {
  return (
    <Router basename="/design-clone-page">
      <main>
        <Routes>
          <Route path="/" element={<Introduction />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
