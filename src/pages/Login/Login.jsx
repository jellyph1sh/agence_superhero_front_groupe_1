
// STYLES
import "./Login.css";

const Login = () => {
    return (
        <div className="login-box">
            <h2 className="login-title">Login</h2>
            <div className="login-body">
                <div className="login-inputs">
                    <div className="email-box">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="login-email" />
                    </div>
                    <div className="password-box">
                        <div className="password-texts">
                            <label htmlFor="password">Password</label>
                            <a href="/forgot-password">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="login-password" />
                    </div>
                </div>
                <div className="login-buttons">
                    <button className="login-btn-login">Login</button>
                    <div className="login-separator">
                        <hr />
                        <p>No account?</p>
                        <hr />
                    </div>
                    <button className="login-btn-register">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Login;