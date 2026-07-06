import "./Hero.css";
import heroImage from "../../assets/images/hero.jpeg";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src={heroImage}
        alt="Varanshi Public School"
        className="hero-img"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-inner">
          <h1>
            Empowering Minds,
            <br />
            Shaping Futures at
            <span> Varanshi Public School</span>
          </h1>

          <p>
            Excellence in Education. A Tradition of Innovation.
            <br />
            Building Leaders for Tomorrow.
          </p>

          <button>Discover Our Programs</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;