// STYLES
import "./Register.css";

const Register = () => {
    return (
        <div className="register-box">
            <h2 className="register-title">Register</h2>
            <div className="register-body">
                <div className="register-inputs">
                    <div className="register-personnal">
                        <div className="input-box">
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" className="input" name="firstname" id="register-firstname" />
                        </div>
                        <div className="input-box">
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text" className="input" name="lastname" id="register-lastname" />
                        </div>
                        <div className="input-box">
                            <label htmlFor="pseudonyme">Pseudonyme</label>
                            <input type="text" className="input" name="pseudonyme" id="register-pseudonyme" />
                        </div>
                    </div>
                    <div className="register-account">
                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="input" name="email" id="register-email" />
                        </div>
                        <div className="input-box">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="input" name="password" id="register-password" />
                        </div>
                        <div className="input-box">
                            <label htmlFor="cpassword">Confirm password</label>
                            <input type="password" className="input" name="cpassword" id="register-cpassword" />
                        </div>
                    </div>
                </div>
                <div className="register-buttons">
                    <button className="register-btn-register">Register</button>
                    <div className="register-separator">
                        <hr />
                        <p>Already have an account?</p>
                        <hr />
                    </div>
                    <button className="register-btn-login">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Register;