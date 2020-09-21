import React from "react";
import { Link, useHistory } from "react-router-dom";
import { isAuth, logout } from "../../services/auth";

import "./styles.css";

function Header() {
    const history = useHistory();
    const LinksAuth = () => {
        const handleLogout = () => {
            LinksAuth();
            logout();
            history.push("/");
        };

        if (isAuth()) {
            return (
                <ul className="list-links">
                    <li className="logo">RPG STORAGE</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Seu Perfil</Link>
                    </li>
                    <li>
                        <Link to="/Adventure-Register">Registrar aventura</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="list-links">
                    <li className="logo">RPG STORAGE</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/register">Registrar-se</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            );
        }
    };

    return (
        <header className="header-page">
            <nav className="header-links">{LinksAuth()}</nav>
        </header>
    );
}

export default Header;
