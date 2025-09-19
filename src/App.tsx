import { useState } from "react";
import "./App.css";

function App() {
  const [compliment, setCompliment] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCompliment = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/compliment");
      const data = await response.json();
      setCompliment(data.compliment);
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
            <p className="compliment">“{compliment}”</p>
          ) : (
            <p className="placeholder">
              Click the button below to receive a beautiful compliment...
            </p>
          )}
        </div>
      </section>

      <div className="cta">
        <button className="btn" onClick={getCompliment} disabled={isLoading}>
          <span className="sparkle">✨</span>
          {isLoading ? "Getting your compliment..." : "Get my compliment"}
        </button>
      </div>
    </main>
  );
}

export default App;