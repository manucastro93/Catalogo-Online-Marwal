import { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import LoginPage from './pages/LoginPage';
import Dashboard from './components/Dashboard';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={Dashboard} />
      {/* Agrega más rutas según sea necesario */}
    </Routes>
  );
};

export default App;