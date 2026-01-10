import { useState } from "react";
import PosterForm from "./components/PosterForm";
import PosterPreview from "./components/PosterPreview";
import PosterGallery from "./components/PosterGallery";

function App() {
  const [posterData, setPosterData] = useState({
    name: "",
    crime: "",
    reward: ""
  });

  const [posters, setPosters] = useState([]);

  const addPoster = () => {
    if (!posterData.name) return;
    setPosters([...posters, posterData]);
    setPosterData({ name: "", crime: "", reward: "" });
  };

  return (
    <div className="app">
      <h1>🤠 Bounty Board</h1>

      <div className="creator">
        <PosterForm posterData={posterData} setPosterData={setPosterData} />
        <PosterPreview posterData={posterData} />
      </div>

      <button onClick={addPoster}>Post Bounty</button>

      <PosterGallery posters={posters} />
    </div>
  );
}

export default App;
