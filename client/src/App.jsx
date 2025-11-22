import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './views/About';
import AuthPage from './views/AuthPage';
import Contact from './views/Contact';
import Shop from './views/Shop';
import Home from './views/Home';
import NotFound from './views/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
