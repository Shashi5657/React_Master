import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  //state is used here for updating the value of playerName & for edit button.
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  //this function enables us to edit
  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  //this functions tracks the input/ which mainly allows us to update any input values
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {/* conditional rendering */}
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          //the playerName we got must be assigned to the value, onCHange function tracks the changes
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
