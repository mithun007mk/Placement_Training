import Navbar from "./Navbar";
import Players from "./Players";

const App = () => {
  let players = [
    { id: 1, name: "Virat Kohli", role: "Batsman", jersey: 18 },
    { id: 2, name: "MS Dhoni", role: "Wicket-Keeper", jersey: 7 },
    { id: 3, name: "Rohit Sharma", role: "Opening Batsman", jersey: 45 },
    { id: 4, name: "Jasprit Bumrah", role: "Fast Bowler", jersey: 93 },
  ];

  return (
    <>
      <Navbar />

      <div
        id="home"
        style={{ padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif" }}
      >
        <h1>Welcome to App</h1>
        <p>Hello! Glad to have you here.</p>
        <p>Have a great day and explore the Indian Cricket Players below!</p>

        <hr style={{ margin: "20px 0" }} />

        <h2>Indian Cricket Players</h2>
        <Players obj1={players} />
      </div>
    </>
  );
};

export default App;