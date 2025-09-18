import { useState } from "react";

function App() {
  const [compliment, setCompliment] = useState<string>("");

  const getCompliment = async () => {
    try {
      const response = await fetch("/api/compliment");
      const data = await response.json();
      setCompliment(data.compliment);
    } catch (error) {
      console.error("Error fetching compliment:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#1e1e1e",
        color: "white"
      }}
    >
      <h1>Compliment Generator</h1>
      <button
        onClick={getCompliment}
        style={{
          margin: "10px",
          padding: "10px 20px",
          borderRadius: "6px",
          border: "1px solid #646cff",
          background: "transparent",
          color: "white",
          cursor: "pointer"
        }}
      >
        Get Compliment
      </button>
      <p>{compliment || "Compliment will appear here..."}</p>
    </div>
  );
}

export default App;