# 🎮 Bounce - React Pong Game

A classic Pong game built with React, TypeScript, TailwindCSS, and Three.js.

## 🚀 Features

- **3D Pong Game**: Built with Three.js for immersive 3D graphics
- **Mouse Controls**: Control the left paddle with your mouse
- **AI Opponent**: Right paddle is AI-controlled and follows the ball
- **Real-time Scoring**: Track your score against the AI
- **Responsive Design**: Works on different screen sizes
- **Modern Tech Stack**: React 18, TypeScript, TailwindCSS, Vite

## 🎯 How to Play

1. **Start the game**: Run `npm run dev` and open your browser
2. **Control your paddle**: Move your mouse up and down to control the left (blue) paddle
3. **Score points**: Hit the ball past the AI's right (orange) paddle
4. **Don't miss**: Prevent the ball from getting past your paddle
5. **First to score wins**: Keep playing to see who gets the highest score!

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **3D Graphics**: Three.js
- **Development**: Hot Module Replacement (HMR)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/bounce.git
cd bounce

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎮 Controls

- **Mouse Movement**: Control left paddle (up/down)
- **AI Paddle**: Automatically follows the ball
- **Ball Physics**: Bounces off paddles and arena boundaries

## 🏗️ Project Structure

```
src/
├── components/
│   ├── GameCanvas.tsx    # Three.js game engine
│   └── Scoreboard.tsx    # Score display overlay
├── App.tsx               # Main game component
├── main.tsx              # App entry point
└── index.css             # TailwindCSS styles
```

## 🚀 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 License

MIT License - feel free to use this project for learning and development!

---

**Enjoy playing Pong! 🏓**
