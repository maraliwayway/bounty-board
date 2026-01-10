function PosterPreview({ posterData }) {
    return (
      <div className="poster">
        <h2>WANTED</h2>
        <p><strong>Name:</strong> {posterData.name || "???"}</p>
        <p><strong>Crime:</strong> {posterData.crime || "???"}</p>
        <p><strong>Reward:</strong> ${posterData.reward || "???"}</p>
      </div>
    );
  }
  
  export default PosterPreview;
  