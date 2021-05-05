import { useState } from "react";
import "./Scoreboard.scss";

export default function AddPlayerForm(props) {
  const [name, setName] = useState("");

  const addPlayer = () => {
    if (!name) {
      alert("Please provide a name");
      return;
    }
    props.addPlayer(name);
    setName("");
  };

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />{" "}
        <button onClick={addPlayer} className="ScoreBoardButton">
          Add
        </button>
      </p>
    </div>
  );
}
