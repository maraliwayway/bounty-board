function PosterGallery({ posters }) {
    return (
      <div className="gallery">
        <h2>Bounty Board</h2>
  
        {posters.length === 0 && <p>No bounties yet.</p>}
  
        {posters.map((poster, index) => (
          <div className="poster small" key={index}>
            <h3>{poster.name}</h3>
            <p>{poster.crime}</p>
            <p>${poster.reward}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default PosterGallery;
  