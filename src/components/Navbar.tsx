import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/portfolio" className="navbar-link">Portfolio</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/desprenoi" className="navbar-link">Despre Noi</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;