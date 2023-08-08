import { Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';

import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';
import Layout from './layouts/main';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          
          <Route path="/dashboard" element={<Layout><DashboardPage /></Layout>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
