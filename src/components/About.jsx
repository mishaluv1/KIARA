import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about__image" />
      <div className="about__content">
        <span className="about__label">Our Story</span>
        <h2 className="about__title">Redefining Luxury Dressing</h2>
        <div className="about__divider" />
        <p className="about__text">
          Kiara Couture was born from a passion for timeless glamour and
          impeccable style. Founded in Dubai in 2018, our boutique
          curates the most stunning dresses for the modern woman who
          demands nothing less than extraordinary.
        </p>
        <p className="about__text">
          From red-carpet showstoppers to intimate evening soirées, every
          piece in our collection is handpicked for its exquisite fabrics,
          flawless tailoring, and undeniable presence. We believe every
          woman deserves to feel like the most beautiful version of herself.
        </p>
        <div className="about__stats">
          <div className="about__stat">
            <span className="about__stat-number">500+</span>
            <span className="about__stat-label">Exclusive Dresses</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">1000+</span>
            <span className="about__stat-label">Happy Clients</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">6</span>
            <span className="about__stat-label">Years of Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;