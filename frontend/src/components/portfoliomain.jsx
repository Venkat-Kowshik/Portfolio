import "./portfoliomain.css"; // Importing external CSS file

const PortfolioMain = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-grid">
        {/* Text Card */}
        <div className="card text-card">
          <div className="card-content">
            <h1 className="title">GVS Kowshik</h1>
            <p className="subtitle">Software Developer | ML Enthusiast</p>
            <p className="description">
              Passionate about creating efficient, scalable, and user-friendly applications.
              Experienced in full-stack development and problem-solving.
            </p>
          </div>
        </div>
        
        {/* Image Card */}
        <div className="card image-card">
            <img src="/Me.jpg" alt="GVS Kowshik" className="profile-image" />
        </div>
       
      </div>
    </div>
  );
};

export default PortfolioMain;