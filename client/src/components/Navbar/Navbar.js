import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./Navbar.css";

const Navbar = () => {
    const titleStyle = {
        color: "red",
        "font-size": 45
    };

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div id="navbar-title">
            <a className="navbar-brand" href="/lobby">What the <span style={titleStyle}>Face?!</span></a>
            </div>
            {!isAuthenticated && (
                <button className="btn btn-light ml-auto" id="login-btn"
                    onClick={() => loginWithRedirect({})}>Login/Sign Up</button>
            )}

            {isAuthenticated && <button className="btn btn-light ml-auto"
                onClick={() => logout()}>Log out</button>}
        </nav>
    );
};

export default Navbar;