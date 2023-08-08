import { Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';

import LoginPage from './pages/Login';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
