import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to='/postrecord'>New Record</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to='/'>Get All Data</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to='/'>Single Record</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;