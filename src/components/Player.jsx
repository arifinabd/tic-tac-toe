import { useState } from "react";
import React from "react";
export default function Player({initialPlayer, symbol}) {
    const [playerName, setPlayerName] = useState(initialPlayer)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing((editing) => !editing)
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleNameChange}/>
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}