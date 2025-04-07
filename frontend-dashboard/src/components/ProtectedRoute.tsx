import { Component, JSX } from 'solid-js';
import { Navigate } from '@solidjs/router';
import { useAuth } from '../contexts/authContext';

const ProtectedRoute: Component<{ children: JSX.Element }> = (props) => {
  const auth = useAuth();
  if (auth.isAuthenticated) {
    return props.children;
  } else {
    console.log('Redirecting to login');
    return <Navigate href="/login" />;
  }
};

export default ProtectedRoute;