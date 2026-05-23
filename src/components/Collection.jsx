import './Collection.css';

const COLLECTION_ITEMS = [
  {
    id: 1,
    name: 'Celestial Gown',
    description: 'Floor-length silk organza with hand-embroidered crystal beading',
    price: 'AED 12,500',
    tag: 'Evening',
    color: '#f3e8d8',
  },
  {
    id: 2,
    name: 'Rose Élégante',
    description: 'Structured corset bodice with cascading tulle overlay skirt',
    price: 'AED 9,800',
    tag: 'Cocktail',
    color: '#e8c4c8',
  },
  {
    id: 3,
    name: 'Midnight Aura',
    description: 'Sleek velvet mermaid silhouette with illusion neckline',
    price: 'AED 14,200',
    tag: 'Gala',
    color: '#4a3f39',
  },
  {
    id: 4,
    name: 'Jardin Secret',
    description: 'A-line chiffon dress with hand-painted floral motifs',
    price: 'AED 8,400',
    tag: 'Cocktail',
    color: '#d4e8d4',
  },
  {
    id: 5,
    name: 'Golden Hour',
    description: 'Metallic jacquard wrap dress with dramatic train',
    price: 'AED 15,900',
    tag: 'Evening',
    color: '#d4b87a',
  },
  {
    id: 6,
    name: 'Ivory Muse',
    description: 'Minimalist crepe sheath with open back and pearl accents',
    price: 'AED 7,600',
    tag: 'Bridal',
    color: '#faf7f2',
  },
];

function Collection() {
  return (
    <section id="collection" className="collection">
      <div className="container">
        <h2 className="section-title">The Collection</h2>
        <div className="section-divider" />
        <p className="collection__intro">
          Each piece is meticulously handcrafted using the finest fabrics and
          embellishments sourced from around the world.
        </p>

        <div className="collection__grid">
          {COLLECTION_ITEMS.map((item) => (
            <div key={item.id} className="collection__card">
              <div
                className="collection__card-image"
                style={{ background: item.color }}
              >
                <div className="collection__card-overlay">
                  <span className="collection__card-tag">{item.tag}</span>
                </div>
                {/* Decorative line art */}
                <svg
                  className="collection__card-dress"
                  viewBox="0 0 120 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60 20 C40 20 30 35 28 50 C26 65 30 75 35 85 L30 150 C28 165 32 180 40 185 C48 190 72 190 80 185 C88 180 92 165 90 150 L85 85 C90 75 94 65 92 50 C90 35 80 20 60 20Z"
                    stroke="rgba(0,0,0,0.12)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M55 50 L50 90 L48 120"
                    stroke="rgba(0,0,0,0.08)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M65 50 L70 90 L72 120"
                    stroke="rgba(0,0,0,0.08)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <ellipse cx="60" cy="18" rx="10" ry="3" fill="rgba(0,0,0,0.06)" />
                </svg>
              </div>
              <div className="collection__card-info">
                <h3 className="collection__card-name">{item.name}</h3>
                <p className="collection__card-desc">{item.description}</p>
                <span className="collection__card-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="collection__cta">
          <a href="#contact" className="btn btn-outline-dark">
            Explore the Full Collection
          </a>
        </div>
      </div>
    </section>
  );
}

export default Collection;