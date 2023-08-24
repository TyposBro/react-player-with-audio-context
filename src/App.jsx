import { useState } from "react";
import "./App.css";

function App() {
  const [song, setSong] = useState(null);
  return (
    <>
      <audio src={song}></audio>
    </>
  );
}

export default App;
