import { useState } from "react";
import "./Scoreboard.scss";

export default function AddPlayerForm(props) {
  const [name, setName] = useState("");

  const submitHandle = (event) => {
    event.preventDefault();
    if (!name) {
      alert("Please provide a name");
      return;
    }

    props.addPlayer(name);
    setName("");
  };

  return (
    <div className="AddPlayerForm">
      <form onSubmit={submitHandle}>
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
          <button className="ScoreBoardButton">Add Player</button>
        </p>
      </form>
    </div>
  );
}
