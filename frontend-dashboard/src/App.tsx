import { Component } from 'solid-js';
import { Router } from '@solidjs/router';
import { AuthProvider } from './contexts/authContext';
import AppRoutes from './routes';

const App: Component = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;