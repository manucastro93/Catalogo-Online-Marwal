import { createSignal, Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { useAuth } from '../contexts/authContext';
import '../styles/Login.css'; // Asegúrate de que la ruta sea correcta

const LoginPage: Component = () => {
    const [username, setUsername] = createSignal('');
    const [password, setPassword] = createSignal('');
    const [errorMessage, setErrorMessage] = createSignal('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            await login(username(), password());
            setErrorMessage(''); // Clear error message on successful login
            navigate('/inicio'); // Redirigir a la página de inicio después del login exitoso
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('Credenciales incorrectas, por favor intente nuevamente.');
        }
    };

    return (
        <div class="login-container">
            <h1 class="login-title">Iniciar Sesión</h1>
            {errorMessage() && <div class="error-message">{errorMessage()}</div>}
            <input
                type="text"
                class="login-input"
                placeholder="Nombre de usuario"
                value={username()}
                onInput={(e) => setUsername(e.currentTarget.value)}
            />
            <input
                type="password"
                class="login-input"
                placeholder="Contraseña"
                value={password()}
                onInput={(e) => setPassword(e.currentTarget.value)}
            />
            <button class="login-button" onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
};

export default LoginPage;