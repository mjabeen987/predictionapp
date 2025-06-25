import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>Welcome to PredictionApp</h1>
        <p className="homepage-subtitle">Your smart prediction assistant</p>
      </header>
      <main className="homepage-main">
        <section className="homepage-intro">
          <h2>Get Started!!!</h2>
          <p>
            This is your home for predictions, analytics, and insights. <br />
            Use the navigation to explore features or start a new prediction.
          </p>
          <button className="homepage-btn">Start Predicting</button>
        </section>
      </main>
      <footer className="homepage-footer">
        <p>&copy; {new Date().getFullYear()} PredictionApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App
