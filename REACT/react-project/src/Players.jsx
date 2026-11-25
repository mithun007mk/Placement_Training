import "./Players.css";

const Players = (data) => {
  return (
    <div className="card-container">
      {data.obj1.map((player) => (
        <div key={player.id} className="card">
          <h3>{player.name}</h3>
          <p>Role: {player.role}</p>
          <p>Jersey: #{player.jersey}</p>
        </div>
      ))}
    </div>
  );
};

export default Players;