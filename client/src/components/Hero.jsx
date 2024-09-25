import "./styles/main.scss";
import hero from "./pic/hero.jpg";

function Hero() {
  return (
    <div className="hero">
      {/* Hero section background */}
      <img src={hero} alt="Hero background" className="hero-image" />

      {/* Hero content */}
      <div className="hero-content">
        <p>Welcome to my page. This page is still under construction.</p>
        <p>
          Working page is Blogs. I post blogs and articles on current events.
        </p>
      </div>

      {/* Line separator */}
      <hr className="hero-line" />
    </div>
  );
}

export default Hero;
