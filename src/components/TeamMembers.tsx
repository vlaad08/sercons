import React from "react";
import './styles/TeamMembers.css'; // Styling for TeamMembers

const TeamMembers = () => {
    return (
        <div className="teamMembers">
            <h2>Echipa Noastră</h2>
            <ul>
                <li>Ion Popescu - Director General</li>
                <li>Maria Ionescu - Arhitect Șef</li>
                <li>Andrei Dumitru - Manager de Proiect</li>
            </ul>
        </div>
    );
};

export default TeamMembers;