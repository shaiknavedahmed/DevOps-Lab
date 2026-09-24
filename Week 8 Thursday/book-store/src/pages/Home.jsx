import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">📚 YOUR NEXT GREAT READ</span>

          <h1>
            Discover stories
            <br />
            <span>worth remembering.</span>
          </h1>

          <p>
            Explore our carefully selected collection of timeless classics,
            bestselling novels, and unforgettable stories.
          </p>

          <div className="hero-buttons">
            <Link to="/books" className="primary-button">
              Explore Books →
            </Link>

            <Link to="/about" className="secondary-button">
              About Us
            </Link>
          </div>
        </div>

        <div className="hero-book">
          <div className="book-cover">
            <span>THE</span>
            <strong>ART OF</strong>
            <strong>READING</strong>
            <small>A collection of timeless stories</small>
          </div>
        </div>
      </section>

      <section className="features">
        <div>
          <span>01</span>
          <h3>Curated Collection</h3>
          <p>Hand-picked books for every kind of reader.</p>
        </div>

        <div>
          <span>02</span>
          <h3>Easy Discovery</h3>
          <p>Find your next favorite book in seconds.</p>
        </div>

        <div>
          <span>03</span>
          <h3>Simple Experience</h3>
          <p>Browse, discover and enjoy without distractions.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;