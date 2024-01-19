// STYLES
import "./Login.css";
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [mail, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
            const response = await axios.post('http://localhost:8000/api/login', {
                mail: mail,
                password: password
            });
         
        if (response.status === 200) {
                               localStorage.setItem('accessToken', response.data.token);

               window.location.href = 'http://localhost:5173/';
            } else {
                console.error('Erreur lors de la connexion : Réponse de l\'API non valide');
            }
        
    };


    return (
        <div className="login-box">
            <h2 className="login-title">Login</h2>
            <div className="login-body">
                <div className="login-inputs">
                    <div className="email-box">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="login-email"
                            value={mail}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="password-box">
                        <div className="password-texts">
                            <label htmlFor="password">Password</label>
                            <a href="/forgot-password">Forgot password?</a>
                        </div>
                        <input
                            type="password"
                            name="password"
                            id="login-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="login-buttons">
                    <button className="login-btn-login" onClick={handleLogin}>
                        Login
                    </button>
                    <div className="login-separator">
                        <hr />
                        <p>No account?</p>
                        <hr />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
