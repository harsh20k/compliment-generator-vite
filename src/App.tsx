import { useState } from "react";

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
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            color: "white",
            margin: "0 0 1rem 0",
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            letterSpacing: "-0.02em"
          }}
        >
          Compliment Generator
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "rgba(255,255,255,0.8)",
            margin: "0",
            fontWeight: "300"
          }}
        >
          Get a beautiful compliment to brighten your day
        </p>
      </div>

      {/* Compliment Display Area */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          minHeight: "300px",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "24px",
          padding: "3rem",
          marginBottom: "3rem",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)"
        }}
      >
        {compliment ? (
          <p
            style={{
              fontSize: "2.2rem",
              fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
              color: "#2d3748",
              textAlign: "center",
              lineHeight: "1.4",
              margin: "0",
              fontWeight: "600",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            "{compliment}"
          </p>
        ) : (
          <p
            style={{
              fontSize: "1.5rem",
              color: "#a0aec0",
              textAlign: "center",
              fontStyle: "italic",
              margin: "0"
            }}
          >
            Click the button below to receive a beautiful compliment...
          </p>
        )}
      </div>

      {/* Button */}
      <button
        onClick={getCompliment}
        disabled={isLoading}
        style={{
          background: isLoading 
            ? "linear-gradient(135deg, #a0aec0 0%, #718096 100%)" 
            : "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
          color: "white",
          border: "none",
          borderRadius: "50px",
          padding: "1rem 3rem",
          fontSize: "1.2rem",
          fontWeight: "600",
          cursor: isLoading ? "not-allowed" : "pointer",
          boxShadow: "0 8px 30px rgba(255,107,107,0.4)",
          transition: "all 0.3s ease",
          transform: isLoading ? "scale(0.98)" : "scale(1)",
          letterSpacing: "0.5px",
          textTransform: "uppercase"
        }}
        onMouseEnter={(e) => {
          if (!isLoading) {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(255,107,107,0.6)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isLoading) {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 30px rgba(255,107,107,0.4)";
          }
        }}
      >
        {isLoading ? "✨ Getting your compliment..." : "💝 Get My Compliment"}
      </button>
    </div>
  );
}

export default App;