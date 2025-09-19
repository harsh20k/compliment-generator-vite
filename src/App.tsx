import { useState } from "react";
import "./App.css";

function App() {
  const [compliment, setCompliment] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [revealKey, setRevealKey] = useState<number>(0);
  const [justCompleted, setJustCompleted] = useState<boolean>(false);

  const getCompliment = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/compliment");
      const data = await response.json();
      setCompliment(data.compliment);
      setRevealKey((k: number) => k + 1);
      setJustCompleted(true);
      setTimeout(() => setJustCompleted(false), 650);
    } catch (error) {
      console.error("Error fetching compliment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="page-wrap">
      <header className="heading">
        <h1>Compliment Generator</h1>
        <p className="subtitle">Get a beautiful compliment to brighten your day</p>
      </header>

      <section className="panel" aria-live="polite">
        <div className="panel-inner">
          {compliment ? (
            <p key={revealKey} className="compliment reveal-enter reveal-enter-active">“{compliment}”</p>
          ) : (
            <p className="placeholder">
              Click the button below to receive a beautiful compliment...
            </p>
          )}
        </div>
      </section>

      <div className="cta">
        <button className={`btn${justCompleted ? " success-pulse" : ""}`} onClick={getCompliment} disabled={isLoading}>
          <span className="btn-content">
            <span className="sparkle">✨</span>
            <span className={`label${isLoading ? " hidden" : ""}`}>Get my compliment</span>
            <span className={`label-loading${isLoading ? "" : " hidden"}`}>
              <span className="spinner" aria-hidden="true"></span>
              Getting your compliment…
            </span>
          </span>
        </button>
      </div>
    </main>
  );
}

export default App;