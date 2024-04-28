import "./styles.css";
import React, { useState } from "react";
import firma from "./assets/firma.png";
import img1 from "./assets/img001.png";
import img2 from "./assets/img002.png";
import img3 from "./assets/img003.png";
import img4 from "./assets/img004.png";
import img5 from "./assets/img005.png";
const images = [img1, img2, img3, img4, img5];

const Loading = (calculatedWidth) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Cargando imágenes</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [numLoaded, setNumLoaded] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const handleClick = () => {
    setCurrentImage((currentImage) => {
      const length = images.length - 1;
      return currentImage < length ? currentImage + 1 : 0;
    });
  };
  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <img className="logo" alt="Carlo Amado" src={firma} />
        <div className="menu">
          <h1>Digital</h1>
          <h1>Pintura</h1>
          <h1>Murales</h1>
          <h1>Lapiz</h1>
        </div>
        <h2>Look at this nice images</h2>
      </header>
      <figure>
        <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL) => (
          <img
            alt=""
            key={imageURL}
            src={images[currentImage]}
            onClick={handleClick}
            onLoad={handleImageLoad}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
