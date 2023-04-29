import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter basename={process.env.PUBLIC_URL}>
  <Router>
    {/* Your routes go here */}
  </Router>
</BrowserRouter>

function App() {
  return (
    <div>
      <Navigation />
      <h1>Welcome to the Home page!</h1>
    </div>
  );
}

export default App;