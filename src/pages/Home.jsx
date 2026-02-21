import homeBanner from '../images/homebanner.jpg';
import necklace from '../images/necklacehome.webp';
import earrings from '../images/earringshome.webp';
import ring from '../images/ring1.jpg';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero text-white text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Moonstone Collection</h1>
          <p className="lead">Luxury Jewelry Inspired by the Moon</p>

      <Link to="/collections" className="btn btn-outline-light"> Shop Collection</Link>
          
        </div>
      </section>

      {/* EDITORIAL INTRO */}
      <section className="editorial-home py-5">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-md-5">
              <span className="editorial-tag">Moonstone Editorial</span>
              <h1 className="editorial-title">
                Jewellery<br />
                that moves<br />
                with the moon
              </h1>
              <p className="editorial-text">
                Lunara creates timeless moonstone jewellery inspired by lunar
                rhythms, soft light, and quiet luxury.
              </p>
<Link to="/about">Know more About Lunara →</Link>
            </div>

            <div className="col-md-7">
              <div className="editorial-image">
                <img src={homeBanner} alt="Lunara Moonstone" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SIGNATURE PIECES */}
      <section className="signature-pieces py-5">
        <div className="container">
          <h2 className="text-center mb-5">Signature Moonstones</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="signature-item">
                <img src={necklace} alt="Celeste Necklace" />
                <p>Celeste Necklace</p>
              </div>
            </div>

            <div className="col-md-4 mt-md-5">
              <div className="signature-item">
                <img src={earrings} alt="Luna Drop Earrings" />
                <p>Luna Drop Earrings</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="signature-item">
                <img src={ring} alt="Orbit Ring" />
                <p>Orbit Ring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-white text-center py-4">
        <p>© 2026 Lunara Moonstone Collection</p>
      </footer>
    </>
  );
}

export default Home;
