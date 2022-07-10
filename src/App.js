import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './pages/Introduction';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/design-clone-page" element={<Introduction />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
