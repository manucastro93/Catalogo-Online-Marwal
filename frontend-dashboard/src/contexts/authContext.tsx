import { createContext, useContext, createSignal, Component, JSX, onCleanup, onMount } from 'solid-js';
import { authService } from '../services/authService';
import { usuarioService } from '../services/usuarioService';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (usuario: string, contrasena: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: Component<{ children: JSX.Element }> = (props) => {
  const [isAuthenticated, setIsAuthenticated] = createSignal<boolean>(false);

  const login = async (usuario: string, contrasena: string) => {
    try {
      await authService.login(usuario, contrasena).then(response => {
        console.log(response.token);
        localStorage.setItem('token',response.token);
        localStorage.setItem('isAuthenticated','true');
        setIsAuthenticated(true);
      })
    } catch (error) {
      console.error('AuthContext: login failed', error);
      setIsAuthenticated(false);
      localStorage.removeItem('isAuthenticated');
      throw error; // Propagar el error para manejarlo en LoginPage
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setIsAuthenticated(false);
      localStorage.removeItem('isAuthenticated');
    } catch (error) {
      console.error('AuthContext: logout failed', error);
    }
  };


  const checkAuth = async () => {
    try {
      //await usuarioService.obtenerUsuarioConectado();
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  // Check authentication status on mount
    checkAuth();

  return (
    <AuthContext.Provider value={{ isAuthenticated: isAuthenticated(), login, logout, checkAuth  }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};