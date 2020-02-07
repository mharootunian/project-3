import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a className="navbar-brand" href="/">What the Face?!</a>

            {!isAuthenticated && (
                <button className="btn btn-light ml-auto"
                    onClick={() => loginWithRedirect({})}>Login/Sign Up</button>
            )}

            {isAuthenticated && <button className="btn btn-light ml-auto"
                onClick={() => logout()}>Log out</button>}
        </nav>
    );
};

export default Navbar;