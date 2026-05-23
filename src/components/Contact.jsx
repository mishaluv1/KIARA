import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__edge contact__edge--top" />
      <div className="contact__edge contact__edge--bottom" />
      <div className="container">
        <h2 className="section-title">Visit Our Boutique</h2>
        <div className="section-divider" />
        <p className="contact__intro">
          Find us at The Dubai Mall, Fashion Avenue — your destination for
          exquisite dresses in the heart of Dubai.
        </p>

        <div className="contact__grid">
          {/* Contact info */}
          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <h4>Visit Our Boutique</h4>
                <p>The Dubai Mall, Fashion Avenue<br />Level 1, Dubai, UAE</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <div>
                <h4>Call Us</h4>
                <p>+971 4 123 4567</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <div>
                <h4>Email</h4>
                <p>info@kiaracouture.com</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              <div>
                <h4>Hours</h4>
                <p>
                  Mon – Thu: 10am – 9pm<br />
                  Fri – Sun: 12pm – 11pm
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="contact__map-wrap">
            <div className="contact__map">
              <span className="contact__map-label">Our Location</span>
              <iframe
                className="contact__map-frame"
                title="Kiara Couture Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.574476399883!2d55.277398315009154!3d25.1971929838958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829b7c1ef%3A0xc0f7cf6ce70e7e9!2sThe%20Dubai%20Mall!5e0!3m2!1sen!2sae!4v1716500000000"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;