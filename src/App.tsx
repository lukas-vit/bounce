import GameCanvas from "./components/GameCanvas";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="w-full h-full relative">
      <Scoreboard />
      <GameCanvas />
    </div>
  );
}

export default App;
