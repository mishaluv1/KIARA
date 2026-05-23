import { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particles = [];
    let animationId;
    let w, h;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * h;
      }
      reset() {
        this.x = Math.random() * w;
        this.y = h + 20;
        this.size = Math.random() * 2.5 + 0.8;
        this.speedY = Math.random() * 0.6 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.15;
        this.opacitySpeed = Math.random() * 0.008 + 0.003;
        this.opacityDir = 1;
      }
      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.opacity += this.opacitySpeed * this.opacityDir;
        if (this.opacity >= 0.7) this.opacityDir = -1;
        if (this.opacity <= 0.1) this.opacityDir = 1;
        if (this.y < -10) this.reset();
        if (this.x < -10) this.x = w + 10;
        if (this.x > w + 10) this.x = -10;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 155, 125, ${this.opacity})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 200, 175, ${this.opacity * 0.35})`;
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      particles = Array.from({ length: 80 }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.update();
        p.draw();
      }
      animationId = requestAnimationFrame(animate);
    };

    init();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className="hero">
      {/* Floating golden particles */}
      <canvas ref={canvasRef} className="hero__particles" />

      {/* Ambient glow orbs */}
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__glow hero__glow--3" />

      {/* Decorative floating diamonds */}
      <div className="hero__diamond hero__diamond--1" />
      <div className="hero__diamond hero__diamond--2" />
      <div className="hero__diamond hero__diamond--3" />
      <div className="hero__diamond hero__diamond--4" />

      {/* Vertical accent lines */}
      <div className="hero__line hero__line--left" />
      <div className="hero__line hero__line--right" />

      <div className="hero__overlay" />

      <div className="hero__content container">
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-line" />
          <span className="hero__eyebrow-text">Dubai's Finest Dressing</span>
          <span className="hero__eyebrow-line" />
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--1">Kiara</span>
          <span className="hero__title-line hero__title-line--2">Couture</span>
        </h1>

        <p className="hero__subtitle">
          Discover <em>exquisite dresses</em> crafted for the modern woman.<br />
          Where luxury meets <em>effortless grace</em>.
        </p>

        <div className="hero__actions">
          <a href="#collection" className="hero__btn hero__btn--primary">
            <span>Explore the Collection</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">
            Private Consultation
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-icon">
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel" />
          </div>
        </div>
        <span className="hero__scroll-text">Discover</span>
      </div>
    </section>
  );
}

export default Hero;