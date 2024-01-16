import { Link, useNavigate } from "react-router-dom";

// COMPONENTS
import SearchBox from "../SearchBox/SearchBox";

// STYLES
import "./Header.css";
import { useState } from "react";

const Header = () => {
    const [isConnected, setConnected] = useState(false);
    const navigate = useNavigate();

    return (
        <header>
            <div className="header-title-box">
                <h1 className="header-title"><span className="red">A</span>gence <span className="red">S</span>uper<span className="red">H</span>eroes</h1>
            </div>
            <SearchBox text={"Superman..."}/>
            {isConnected ?
                <img src="/src/assets/images/account.svg" alt="account icon" className="header-account" onClick={() => {navigate("/account")}}/>
                :
                <div className="nav-buttons">
                    <Link to={"/login"} className="link-button">Login</Link>
                    <Link to={"/register"} className="link-button">Register</Link>
                </div>
            }
        </header>
    );
};

export default Header;