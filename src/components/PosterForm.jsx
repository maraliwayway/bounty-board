function PosterForm({ posterData, setPosterData }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setPosterData({
        ...posterData,
        [name]: value
      });
    };
  
    return (
      <form className="form">
        <h2>Create Wanted Poster</h2>
  
        <input
          name="name"
          placeholder="Outlaw Name"
          value={posterData.name}
          onChange={handleChange}
        />
  
        <input
          name="crime"
          placeholder="Crime"
          value={posterData.crime}
          onChange={handleChange}
        />
  
        <input
          name="reward"
          placeholder="Reward ($)"
          value={posterData.reward}
          onChange={handleChange}
        />
      </form>
    );
  }
  
  export default PosterForm;
  