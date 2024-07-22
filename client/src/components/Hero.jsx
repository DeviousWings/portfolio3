import "./styles/Hero.scss";
import "./styles/main.scss";
import logoimage from "./pic/logo.jpg";

function Hero() {
  return (
    <div className="main hero">
      <img src={logoimage} alt="Hero" className="logo-image" />
      <div className="hero-content">
        <p>Welcome to my page. This page is still under construction.</p>
        <p>
          Working page is Blogs. I post blog and articles on current events.
        </p>
      </div>
      <hr className="hero-line" />
    </div>
  );
}

export default Hero;
