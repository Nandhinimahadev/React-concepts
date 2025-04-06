import { useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: isDark ? "#222" : "#f4f4f4",
        color: isDark ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>{isDark ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
