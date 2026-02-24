import React, { useEffect, useState } from "react";
import "./Discover.css";

export default function Discover() {
  const text = "DISCOVER OUR WORLD";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <section className="discover-section" aria-label="Discover our collection">
      <div className="bg-glow" aria-hidden="true"></div>

      <div className="discover-container">
        <div className="discover-image">
          <img
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80"
            alt="Luxury handcrafted leather bag from our premium collection"
            width="600"
            height="450"
            loading="eager"
          />
        </div>

        <div className="discover-content">
          <h1 className="discover-heading">{displayedText}</h1>

          <p className="discover-text">
            Crafted with elegance. Designed for perfection.
          </p>

          <button className="discover-button" aria-label="Explore our bag collection">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
}