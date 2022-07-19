import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './pages/Introduction';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <Router> */}
      <main>
        <Routes>
          <Route path="/" element={<Introduction />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
