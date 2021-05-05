import "./Scoreboard.scss";
import { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Player from "./Player";
import Title from "./Title";

function compareScore(playera, playerb) {
  return playerb.score - playera.score;
}

function compareName(nameplayera, nameplayerb) {
  return nameplayera.name.localeCompare(nameplayerb.name);
}

export default function Scoreboard() {
  const [sortBy, setSortBy] = useState("name");

  const [players, setPlayers] = useState([]);

  const sortedPlayers = [...players].sort(
    sortBy === "name" ? compareName : compareScore
  );

  const changeSorting = (event) => {
    console.log("new sort order:", event.target.value);
    setSortBy(event.target.value);
  };

  const incrementScore = (id) => {
    const newPlayers = players.map((player) => {
      if (player.id === id && player.score < 100) {
        return { ...player, score: player.score + 1 };
      } else {
        return player;
      }
    });
    setPlayers(newPlayers);
  };

  const reduceScore = (id) => {
    const newPlayers = players.map((player) => {
      if (player.id === id && player.score > 0) {
        return { ...player, score: player.score - 1 };
      } else {
        return player;
      }
    });
    setPlayers(newPlayers);
  };

  const resetScore = () => {
    const newPlayers = players.map((player) => ({
      ...player,
      score: 0,
    }));
    setPlayers(newPlayers);
  };

  const randomScore = () => {
    const newPlayers = players.map((player) => ({
      ...player,
      score: Math.floor(Math.random() * 100),
    }));
    setPlayers(newPlayers);
  };

  const addPlayer = (name) => {
    setPlayers([...players, { id: players.length + 1, name, score: 0 }]);
    console.log(...players);
  };

  return (
    <div>
      <Title title="Only One Can Win!" />
      <p>
        Sort order:{" "}
        <select onChange={changeSorting} value={sortBy}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <button onClick={resetScore} className="ScoreBoardButton">
        Reset Score
      </button>
      <button onClick={randomScore} className="ScoreBoardButton">
        Random Score
      </button>
      <p>Player's scores:</p>

      {sortedPlayers.map((player) => {
        return (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
            reduceScore={reduceScore}
          />
        );
      })}

      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
