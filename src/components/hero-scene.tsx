"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const heroPlumber =
  "https://upload.wikimedia.org/wikipedia/commons/d/df/Plumber_at_work_2010_USA.jpg";
const waterTexture =
  "https://upload.wikimedia.org/wikipedia/commons/5/5c/Water_Texture.jpg";
const modernHome =
  "https://upload.wikimedia.org/wikipedia/commons/4/47/Modern-home-dusk_%28Creative_Commons%29.jpg";

export function HeroScene() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 110]);
  const cardY = useTransform(scrollY, [0, 500], [0, -50]);
  const textureY = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <div className="hero-scene">
      <motion.div className="hero-scene__photo-wrap" style={{ y: heroY }}>
        <img
          alt="Harbor Flow Plumbing technician at work"
          className="hero-scene__photo"
          src={heroPlumber}
        />
      </motion.div>

      <motion.img
        alt="Water texture"
        className="hero-scene__texture"
        src={waterTexture}
        style={{ y: textureY }}
      />

      <motion.div className="hero-scene__card" style={{ y: cardY }}>
        <img
          alt="Modern Gold Coast home exterior at dusk"
          className="hero-scene__card-image"
          src={modernHome}
        />
        <div className="hero-scene__card-copy">
          <p>Gold Coast homes, kitchens, bathrooms and hot water systems.</p>
          <span>Calm service. Fast response. Clean finish.</span>
        </div>
      </motion.div>
    </div>
  );
}
