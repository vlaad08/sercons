import React from "react";
import './styles/Header.css'; // Styling for Header

const Header: React.FC<{title: string}> = ({ title  }) => {
    return (
        <div className="header">
            <h1>{title}</h1>
        </div>
    );
};

export default Header;