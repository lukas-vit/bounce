export default function Scoreboard() {
  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/50 text-white px-6 py-3 rounded-lg">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Ping Pong 3D</h1>
        <div className="flex gap-8 text-xl">
          <div>
            <span className="text-red-400">Player: </span>
            <span className="font-bold">0</span>
          </div>
          <div>
            <span className="text-cyan-400">Opponent: </span>
            <span className="font-bold">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
