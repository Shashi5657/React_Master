import React, { useState } from "react";
import "./App.css";

// Innovative Project: Mood-Based Color Generator with Add-ons
// This React app generates a color palette based on the user's current mood and includes saving and sharing features

function App() {
  const [mood, setMood] = useState("");
  const [colors, setColors] = useState([]);
  const [savedPalettes, setSavedPalettes] = useState([]);

  const moodColorMapping = {
    happy: ["#FFD700", "#FFEC8B", "#FFFAF0", "#FFF68F", "#FFE4B5"],
    sad: ["#1E90FF", "#4682B4", "#87CEFA", "#ADD8E6", "#B0C4DE"],
    energetic: ["#FF4500", "#FF6347", "#FF7F50", "#FF8C00", "#FFA07A"],
    calm: ["#2E8B57", "#3CB371", "#66CDAA", "#8FBC8F", "#20B2AA"],
    romantic: ["#FF1493", "#FF69B4", "#FFB6C1", "#FFC0CB", "#FF5E95"],
  };

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const generateColors = () => {
    if (moodColorMapping[mood.toLowerCase()]) {
      setColors(moodColorMapping[mood.toLowerCase()]);
    } else {
      setColors([]);
    }
  };

  const savePalette = () => {
    if (colors.length > 0) {
      setSavedPalettes([...savedPalettes, { mood, colors }]);
    }
  };

  const sharePalette = () => {
    if (colors.length > 0) {
      const colorList = colors.join(", ");
      navigator.clipboard
        .writeText(`Mood: ${mood}\nColors: ${colorList}`)
        .then(() => alert("Palette copied to clipboard!"))
        .catch(() => alert("Failed to copy palette."));
    }
  };

  return (
    <div
      className="App"
      style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}
    >
      <header>
        <h1>Mood-Based Color Generator</h1>
      </header>
      <main>
        <p>Enter your mood to generate a matching color palette:</p>
        <input
          type="text"
          placeholder="e.g., Happy, Sad, Energetic"
          value={mood}
          onChange={handleMoodChange}
          style={{
            padding: "10px",
            borderRadius: "5px",
            width: "60%",
            marginBottom: "20px",
          }}
        />
        <br />
        <button
          onClick={generateColors}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
          }}
        >
          Generate Palette
        </button>

        {colors.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <h2>Color Palette for "{mood}"</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              {colors.map((color, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: color,
                    width: "100px",
                    height: "100px",
                    margin: "0 10px",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                ></div>
              ))}
            </div>
            <button
              onClick={savePalette}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#2196F3",
                color: "white",
                cursor: "pointer",
              }}
            >
              Save Palette
            </button>
            <button
              onClick={sharePalette}
              style={{
                marginTop: "10px",
                marginLeft: "10px",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#FF5722",
                color: "white",
                cursor: "pointer",
              }}
            >
              Share Palette
            </button>
          </div>
        )}

        {colors.length === 0 && mood && (
          <p style={{ marginTop: "20px", color: "red" }}>
            Sorry, no palette available for "{mood}". Try another mood!
          </p>
        )}

        {savedPalettes.length > 0 && (
          <div style={{ marginTop: "40px" }}>
            <h2>Saved Palettes</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {savedPalettes.map((palette, index) => (
                <li key={index} style={{ marginBottom: "20px" }}>
                  <h3>Mood: {palette.mood}</h3>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {palette.colors.map((color, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: color,
                          width: "50px",
                          height: "50px",
                          margin: "0 5px",
                          borderRadius: "5px",
                          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                      ></div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
